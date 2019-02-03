import express from "express";
import bodyParser from "body-parser";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import schema from "./schema";
import pubsub from "./pubsub";
import { execute, subscribe } from "graphql";
import { createServer } from "http";
import { SubscriptionServer } from "subscriptions-transport-ws";
const PORT = 8000;

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

server.listen(PORT, function() {
  console.log(`Server running on port ${PORT}`);
});
