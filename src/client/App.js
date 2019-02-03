import React, { Component } from "react";
import "./App.css";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
import Chat from "./Chat";
import { SubscriptionClient } from "subscriptions-transport-ws";
import { WebSocketLink } from "apollo-link-ws";

const wsClient = new SubscriptionClient("ws://localhost:8000/graphql", {
  reconnect: true
});

// Create a WebSocket link:
const wsLink = new WebSocketLink(wsClient);

const client = new ApolloClient({
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
