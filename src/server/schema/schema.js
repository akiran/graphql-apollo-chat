export default `
  type User {
    id: ID!
    firstName: String
    lastName: String
  }

  type Message {
    id: ID!
    user: User
    text: String
  }

  type Query {
    users: [User],
    messages: [Message],
    message(id: ID!): Message,
    Message: Message
  }
`;
