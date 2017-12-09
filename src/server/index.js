import express from "express";
import bodyParser from "body-parser";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import schema from "./schema";
const PORT = 8000;
import pubsub from "./pubsub";
import setupFunctions from "./setupFunctions";
import { execute, subscribe } from "graphql";
import { createServer } from "http";
import { PubSub, SubscriptionManager } from "graphql-subscriptions";
import { SubscriptionServer } from "subscriptions-transport-ws";

const app = express();
app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));

const server = createServer(app);

new SubscriptionServer(
  { schema, execute, subscribe },
  { server, path: "/subscriptions" }
);

app.use(
  "/graphiql",
  graphiqlExpress({
    endpointURL: "/graphql"
  })
);
// bodyParser is needed just for POST.

server.listen(PORT);
