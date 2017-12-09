import { findUsers, findMessages, findMessage, findUser } from "../connectors";

export default {
  Message: {
    user: (obj, args, ctx) => findUser(obj.user)
  },
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
