import gql from "graphql-tag";
import apolloClient from "./apollo-client";

export async function getHeroSection() {
	const { data } = await apolloClient.query({
		query: gql`
      query GetHeroSection {
        heroSection(id: "1yzJwEvqxQhu9PBltUAnyR") {
          header
					subtext
        }
      }
    `,
	});
	return data.heroSection;
}

export default { getHeroSection };