import React, { Component } from "react";
import "./App.css";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
import Chat from "./Chat";
import { SubscriptionClient } from "subscriptions-transport-ws";
import { split } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";

// Create an http link:
// const httpLink = new HttpLink({
//   uri: "/graphql"
// });

const wsClient = new SubscriptionClient("ws://localhost:8000/subscriptions", {
  reconnect: true
  // connectionParams: connectionParams
});

// Create a WebSocket link:
const wsLink = new WebSocketLink(wsClient);

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink
  // httpLink
);

const client = new ApolloClient({
  // By default, this client will send queries to the
  //  `/graphql` endpoint on the same host
  link: wsLink,
  cache: new InMemoryCache()
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Chat />
      </ApolloProvider>
    );
  }
}

export default App;
