import ApolloProvider from "@providers/ApolloProvider.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider>
      <App />
    </ApolloProvider>
  </StrictMode>
);
