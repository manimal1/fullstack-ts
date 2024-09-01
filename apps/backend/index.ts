import { ApolloServer } from "apollo-server-express";
import express from "express";
import { schema } from "./src/schema";

async function startServer() {
  // Initialize Apollo Server
  const server = new ApolloServer({ schema });

  // Start Apollo Server
  await server.start();

  // Initialize Express App
  const app = express();

  // Apply Apollo Server as middleware
  server.applyMiddleware({ app });

  // Start the Express server
  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

// Start the server
startServer();
