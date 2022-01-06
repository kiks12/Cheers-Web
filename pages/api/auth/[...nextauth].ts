
/*

Cheers - Next auth Middleware Configuration
Last Updated: Dec. 30, 2021
Tolentino, Francis James S.

*/


import NextAuth from "next-auth";


import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";


const GOOGLE_CLIENT_ID : string = process.env.GOOGLE_CLIENT_ID as string;
const GOOGLE_CLIENT_SECRET : string = process.env.GOOGLE_CLIENT_SECRET as string;


export default NextAuth({

	secret: "YxD0B2pHi7YmneR7LewlR6XaRhUr/gm+0bxUy87jC1A=",
	
	providers: [
		GoogleProvider({
			clientId: GOOGLE_CLIENT_ID,
			clientSecret: GOOGLE_CLIENT_SECRET,
		}),

		FacebookProvider({
			clientId: "1295794440886790",
			clientSecret: "1db5ab54b8f0f5f6cdec953a7f943ce7",
		}),
	],

	callbacks: {
		session: async ({ session }) => {
			return Promise.resolve(session);
		},
	},
});
