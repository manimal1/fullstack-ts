import { PrismaClient } from "@prisma/client";
import { ApolloServer, gql } from "apollo-server-express";
import express from "express";

// Initialize Prisma Client
const prisma = new PrismaClient();

// Define GraphQL schema
const typeDefs = gql`
  type Query {
    users: [User!]!
  }

  type User {
    id: Int!
    name: String!
    email: String!
  }
`;

// Define resolvers
const resolvers = {
  Query: {
    users: async () => {
      return await prisma.user.findMany();
    },
  },
};

async function startServer() {
  // Initialize Apollo Server
  const server = new ApolloServer({ typeDefs, resolvers });

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
