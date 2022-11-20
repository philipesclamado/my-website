import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-us-west-2.hygraph.com/v2/cla3knunj2x8101uobiag6i7i/master",
  cache: new InMemoryCache(),
});

export default client;
