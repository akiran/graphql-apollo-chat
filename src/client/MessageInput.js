import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

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
      this.props.mutate({
        variables: {
          text: this.state.text
        },
        optimisticResponse: {
          __typename: "Mutation",
          addMessage: {
            __typename: "Message",
            id: "tempid",
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
  mutation addMessageMutation($text: String!) {
    addMessage(text: $text) {
      id
      text
    }
  }
`;

export default graphql(addMessageMutation)(MessageInput);
