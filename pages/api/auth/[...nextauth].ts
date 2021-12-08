import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    providers:[
        GoogleProvider({
            clientId: "440043100008-d4m6dvh53v3jhk7i2lpuf5cr2j1s45ce.apps.googleusercontent.com",
            clientSecret: "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"
        })
    ],
    callbacks: {
        session: async ({session}) => {
            console.log("Session: ", session);
            return Promise.resolve(session);
        }
    }
})