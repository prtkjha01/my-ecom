import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        return { account, profile };
        //profile.email_verified && profile.email.endsWith("@example.com")
      }
      return true;
      // Do different verification for other providers that don't have `email_verified`
    },
  },
};
export default NextAuth(authOptions);
