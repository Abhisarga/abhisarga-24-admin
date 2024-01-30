import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    uri: "https://localhost:6969",
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;