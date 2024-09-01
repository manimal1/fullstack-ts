import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider,
} from "@apollo/client";
import React from "react";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql", // Backend GraphQL endpoint
  cache: new InMemoryCache(),
});

const ApolloProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Provider client={client}>{children}</Provider>;
};

export default ApolloProvider;
