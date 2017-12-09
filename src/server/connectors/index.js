import uuid from "uuid";
import pubsub from "../pubsub";

let users = [{ firstName: "Bot", lastName: "", id: "1" }];
let messages = [{ id: "1", user: "1", text: "Lets chat ..." }];

export function findUsers() {
  return users;
}

export function findUser(id) {
  return users.find(user => user.id === id);
}

export function addUser(user) {
  users = users.concat(user);
  return user;
}

export function findMessages() {
  return messages;
}

export function findMessage(id) {
  let message = messages.find(message => message.id === id);
  return message;
}

export function addMessage({ id, text }) {
  const newMessage = {
    id,
    text
  };
  messages = messages.concat(newMessage);
  pubsub.publish("ON_NEW_MESSAGE", newMessage);
  return newMessage;
}
