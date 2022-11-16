import NextAuth from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../src/utils/mongodb/mongodb";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "email",
                    type: "text",
                    placeholder: "my@email.com",
                },
                password: { label: "password", type: "password" },
            },
            async authorize(credentials) {
                const clientDB = await clientPromise;
                const db = clientDB.db("test");
                const user = await db
                    .collection("users")
                    .findOne({ email: credentials.email });
                console.log(user);
                if (
                    credentials.email === user.email &&
                    credentials.password === user.password
                ) {
                    return user;
                }

                return null;
            },
        }),
    ],
    callbacks: {},
    adapter: MongoDBAdapter(clientPromise),
    secret: "testtesttest",
    jwt: {
        secret: "testtesttest",
    },
    pages: {
        error: "/auth/error",
        signIn: "/auth/signin",
    },
    session: {
        strategy: "jwt",
    },
});
