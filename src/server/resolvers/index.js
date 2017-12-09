import { findUsers, findMessages, findMessage } from "../connectors";

export default {
  Query: {
    users(_, args, ctx) {
      return findUsers();
    },
    messages(_, args, ctx) {
      console.log(findMessages());
      return findMessages();
    }
  }
};
