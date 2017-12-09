import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";

export default class Chat extends React.Component {
  render() {
    return (
      <div>
        <Messages />
        <MessageInput />
      </div>
    );
  }
}
