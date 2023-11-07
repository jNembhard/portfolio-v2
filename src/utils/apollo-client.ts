import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
    headers: {
      "x-api-key": `${process.env.NEXT_PUBLIC_API_KEY}`,
    },
  });
};

export default createApolloClient;
