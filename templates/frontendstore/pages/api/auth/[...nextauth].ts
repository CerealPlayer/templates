import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        user: { label: "Username" },
        email: { label: "Email" },
        pass: { label: "Password" },
        terms: { label: "Terms" },
        proto: { label: "Proto" },
      },
      authorize(credentials) {
        // Data validation, from db check if user exists and retrieve info.
        if (credentials) {
          return { id: credentials.user, user: credentials.user };
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
});
