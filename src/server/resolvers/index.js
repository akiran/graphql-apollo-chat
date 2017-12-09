import {
  findUsers,
  findMessages,
  findMessage,
  findUser,
  addMessage
} from "../connectors";
import pubsub from "../pubsub";

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
  },
  Subscription: {
    onNewMessage: {
      resolve(payload) {
        console.log("Subscription", payload);
        return payload;
      },
      subscribe: () => pubsub.asyncIterator("ON_NEW_MESSAGE")
    }
  }
};
