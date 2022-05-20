import express from "express";
import apolloServer from "./server";
import resolvers from "./resolvers";
import typeDefs from "./types";

const app = express();
app.use(express.json());

app.get("/ping", (_req, res) => {
  console.log("Checking");
  res.send("pong");
});

apolloServer(typeDefs, resolvers, app);
