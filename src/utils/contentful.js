import gql from "graphql-tag";
import apolloClient from "./apollo-client";

export async function getHeroSection() {
	const { data } = await apolloClient.query({
		query: gql`
      query GetHeroSection {
        heroSection(id: "${process.env.NEXT_PUBLIC_HERO_SECTION_ID}") {
          header
					subtext
        }
      }
    `,
	});
	return data.heroSection;
}

export async function getSession() {
	const { data } = await apolloClient.query({
		query: gql`
      query GetSession {
        session(id: "${process.env.NEXT_PUBLIC_SECTION_ID}") {
          title
					description {
						json
					}
        }
      }
    `,
	});
	return data.session;
}

export async function getAboutUs() {
	const { data } = await apolloClient.query({
		query: gql`
      query GetAboutUs {
				aboutUs(id: "${process.env.NEXT_PUBLIC_ABOUT_US_ID}") {
					header
					studentLeadersHeader
					subheading
					studentLeadersCollection{
						items {
							name
						}
					}
					body {
						json
					}
				}
      }
    `,
	});
	return data.aboutUs;
}

export async function getWahtYouWillGain() {
	const { data } = await apolloClient.query({
		query: gql`
      query GetWhatYouWillGain {
				landingPageWhatYouWillGain(id: "${process.env.NEXT_PUBLIC_LANDING_WHATYOUWILLGAIN_ID}") {
					preHeader
					header
					body {
						json
					}
					topicsHeader
					topics
				}
      }
    `,
	});
	return data.landingPageWhatYouWillGain;
}

export async function getSessionList() {
	const { data } = await apolloClient.query({
		query: gql`
      query GetSessionList {
				landingPageSessions(id: "${process.env.NEXT_PUBLIC_LANDING_SESSIONS_ID}") {
					preHeader
					header
				}
      }
    `,
	});
	return data.landingPageSessions;
}

export async function getFactAndQuote() {
	const { data } = await apolloClient.query({
		query: gql`
      query GetFactAndQuote {
				landingPageFactsAndQuotes(id: "${process.env.NEXT_PUBLIC_LANDING_FACTSANDQUOTES_ID}") {
					header
					description
				}
      }
    `,
	});
	return data.landingPageFactsAndQuotes;
}


export default { getHeroSection, getSession, getAboutUs, getWahtYouWillGain, getSessionList, getFactAndQuote };