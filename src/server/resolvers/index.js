import {
  findUsers,
  findMessages,
  findMessage,
  findUser,
  addMessage
} from "../connectors";

export default {
  Message: {
    id: obj => obj.id,
    user: obj => findUser(obj.user)
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
  },
  Mutation: {
    addMessage(_, args, ctx) {
      return addMessage(args);
    }
  }
};
