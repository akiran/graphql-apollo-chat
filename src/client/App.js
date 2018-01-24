import React, { Component } from "react";
import "./App.css";
import { ApolloProvider } from "react-apollo";
import Chat from "./Chat";
import client from './apollo-client'

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
