import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

export class Messages extends React.Component {
  render() {
    console.log(this.props);
    const { data: { messages, loading } } = this.props;
    if (loading) {
      return <div>Loading messages ...</div>;
    }
    return (
      <div>
        {messages.map(message => <div key={message.id}>{message.text}</div>)}
      </div>
    );
  }
}

const messagesQuery = gql`
  {
    messages {
      id
      text
    }
  }
`;

export default graphql(messagesQuery)(Messages);
