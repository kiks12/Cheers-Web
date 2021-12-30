
/*

Cheers - Next auth Middleware Configuration
Last Updated: Dec. 30, 2021
Tolentino, Francis James S.

*/


import NextAuth from "next-auth";


import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export default NextAuth({

	secret: "YxD0B2pHi7YmneR7LewlR6XaRhUr/gm+0bxUy87jC1A=",
	
	providers: [
		GoogleProvider({
			clientId: "440043100008-d4m6dvh53v3jhk7i2lpuf5cr2j1s45ce.apps.googleusercontent.com",
			clientSecret: "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",
		}),

		FacebookProvider({
			clientId: "1295794440886790",
			clientSecret: "1db5ab54b8f0f5f6cdec953a7f943ce7",
		}),
	],

	callbacks: {
		session: async ({ session }) => {
			console.log("Session: ", session);
			return Promise.resolve(session);
		},
	},
});
