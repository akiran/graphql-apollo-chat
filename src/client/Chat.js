import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import {updateNetworkStatus} from './local-state/mutations'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'

class Chat extends React.Component {
  componentDidMount() {
    updateNetworkStatus(true)
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <Messages />
        <MessageInput />
      </div>
    );
  }
}

const networkStatusQuery = gql`
  {
    networkStatus @client {
      isConnected
    }
  }
`

export default graphql(networkStatusQuery)(Chat)
