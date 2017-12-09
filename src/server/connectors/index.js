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
  return messages.map(message => ({
    ...message,
    user: findUser(message.user)
  }));
}

export function findMessage(id) {
  let message = messages.find(message => message.id === id);
  return {
    ...message,
    user: findUser(message.user)
  };
}

export function addMessage(message) {
  messages = messages.concat(message);
  return messages;
}
