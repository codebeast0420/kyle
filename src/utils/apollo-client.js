import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloLink } from "apollo-link";
import { HttpLink } from "apollo-link-http";

const TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
const SPACE = process.env.NEXT_PUBLIC_SPACE_ID;
console.log("adsf", SPACE, TOKEN);
const URL = `https://graphql.contentful.com/content/v1/spaces/${SPACE}`;

const http = new HttpLink({
	uri: URL,
	headers: {
		Authorization: `Bearer ${TOKEN}`,
	},
});

const link = ApolloLink.from([http]);

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
	link,
	cache,
});

export default apolloClient;