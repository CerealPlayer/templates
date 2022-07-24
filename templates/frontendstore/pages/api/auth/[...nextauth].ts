import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const AuthOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        user: { label: "Username" },
        email: { label: "Email" },
        pass: { label: "Password" },
        terms: { label: "Terms" },
        proto: { label: "Proto" },
      },
      async authorize(credentials) {
        // Data validation, from db check if user exists and retrieve info.
        if (credentials) {
          const user = { name: credentials.user, email: "test@test.test" };
          return user;
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
}

export default NextAuth(AuthOptions);
