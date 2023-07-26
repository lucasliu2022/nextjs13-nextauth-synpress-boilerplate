import NextAuth, { NextAuthOptions } from 'next-auth';

// import CredentialsProvider from 'next-auth/providers/credentials';

// Social Providers
import GoogleProvider from 'next-auth/providers/google';
import TwitterProvider from 'next-auth/providers/twitter';

// // Custom Providers
// import LoginProvider from '@/lib/providers/loginProvider';
// import SignupProvider from '@/lib/providers/signupProvider';
// import VerifyEmailProvider from '@/lib/providers/verifyEmailProvider';
// import MfaLoginProvider from '@/lib/providers/mfaLoginProvider';

let providers = [];
if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  providers.push(
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  );
}

if (process.env.TWITTER_CLIENT_ID && process.env.TWITTER_CLIENT_SECRET) {
  providers.push(
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
    })
  );
}

/**
 * next auth credentials login or signin handler
 */
// providers.push([
//   CredentialsProvider({
//     name: 'Credentials',
//     credentials: {
//       username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
//       password: { label: 'Password', type: 'password' },
//     },

//     async authorize(credentials) {
//       // handle logic here
//       return null
//     },
//   }),
//   LoginProvider,
//   SignupProvider,
//   VerifyEmailProvider,
//   MfaLoginProvider
// ]);

export const authOptions: NextAuthOptions = {
  callbacks: {
    // handle initial requests
    async jwt({ token, user, account, trigger, session }) {
      // next auth session update function
      if (trigger === 'update') {
      }

      // next auth social providers
      if (account?.provider === 'google') {
      }
      if (account?.provider === 'twitter') {
      }
      if (account?.provider === 'credentials') {
      }

      return token;
    },

    // update session from jwt function response
    async session({ session, token }) {
      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
