import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import uuid from "uuid";

export class MessageInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  setText = e => {
    this.setState({
      text: e.target.value
    });
  };
  addMessage = e => {
    if (!this.state.text) {
      return;
    }
    if (e.key === "Enter") {
      console.log("send");
      const newID = uuid.v4();
      this.props.mutate({
        variables: {
          text: this.state.text,
          id: newID
        },
        optimisticResponse: {
          __typename: "Mutation",
          addMessage: {
            __typename: "Message",
            id: newID,
            text: this.state.text
          }
        },
        update: (store, { data: { addMessage } }) => {
          const data = store.readQuery({
            query: messagesQuery
          });
          if (!data.messages.find(message => message.id === addMessage.id)) {
            data.messages = [...data.messages, addMessage];
            store.writeQuery({
              query: messagesQuery,
              data
            });
          }
        }
      });
      this.setState({ text: "" });
    }
  };
  render() {
    return (
      <div>
        <input
          className="form-control"
          value={this.state.text}
          onChange={this.setText}
          onKeyDown={this.addMessage}
        />
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

const addMessageMutation = gql`
  mutation addMessageMutation($id: ID!, $text: String!) {
    addMessage(id: $id, text: $text) {
      id
      text
    }
  }
`;

export default graphql(addMessageMutation)(MessageInput);
