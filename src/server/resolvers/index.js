import { findUsers, findMessages, findMessage } from "../connectors";

export default {
  Query: {
    users(_, args, ctx) {
      return findUsers();
    },
    messages(_, args, ctx) {
      return findMessages();
    },
    message(_, args, ctx) {
      return findMessage(args.id);
    }
  }
};
