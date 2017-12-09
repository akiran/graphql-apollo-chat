import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

export class Messages extends React.Component {
  render() {
    console.log(this.props);
    return <div />;
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
