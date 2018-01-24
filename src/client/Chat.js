import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { UPDATE_NETWORK_STATUS } from './local-state/mutations'
import {graphql} from 'react-apollo'
// import {updateNetworkStatus} from './local-state/mutations'

class Chat extends React.Component {
  componentDidMount() {
    // updateNetworkStatus(false)
  }
  render() {
    return (
      <div>
        <Messages />
        <MessageInput />
      </div>
    );
  }
}

const WrappedComponent = graphql(UPDATE_NETWORK_STATUS, {
  props: ({ mutate }) => ({
    updateNetworkStatus: isConnected => mutate({ variables: { isConnected } }),
  }),
})(Chat);

export default WrappedComponent
