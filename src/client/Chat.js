import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import {updateNetworkStatus} from './local-state/mutations'

export default class Chat extends React.Component {
  componentDidMount() {
    updateNetworkStatus(true)
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
