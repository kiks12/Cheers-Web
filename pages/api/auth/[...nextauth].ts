
/*

Cheers - Next auth Middleware Configuration
Last Updated: Jan. 6, 2022
Tolentino, Francis James S.

*/


import NextAuth from "next-auth";


import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";


const GOOGLE_CLIENT_ID : string = process.env.GOOGLE_CLIENT_ID as string;
const GOOGLE_CLIENT_SECRET : string = process.env.GOOGLE_CLIENT_SECRET as string;
const FACEBOOK_CLIENT_ID : string = process.env.FACEBOOK_CLIENT_ID as string;
const FACEBOOK_CLIENT_SECRET : string = process.env.FACEBOOK_CLIENT_SECRET as string;


export default NextAuth({

	secret: "YxD0B2pHi7YmneR7LewlR6XaRhUr/gm+0bxUy87jC1A=",
	
	providers: [
		GoogleProvider({
			clientId: GOOGLE_CLIENT_ID,
			clientSecret: GOOGLE_CLIENT_SECRET,
		}),

		FacebookProvider({
			clientId: FACEBOOK_CLIENT_ID,
			clientSecret: FACEBOOK_CLIENT_SECRET,
		}),
	],

	callbacks: {
		session: async ({ session }) => {
			return Promise.resolve(session);
		},
	}
	
});
