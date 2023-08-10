import NextAuth, { NextAuthOptions } from 'next-auth';

// Import social providers for authentication
import GoogleProvider from 'next-auth/providers/google';
import TwitterProvider from 'next-auth/providers/twitter';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from '@/utils/prisma';
import { Adapter } from 'next-auth/adapters';

// Custom Providers (uncomment and import if used)
// import LoginProvider from '@/lib/providers/loginProvider';
// import SignupProvider from '@/lib/providers/signupProvider';
// import VerifyEmailProvider from '@/lib/providers/verifyEmailProvider';
// import MfaLoginProvider from '@/lib/providers/mfaLoginProvider';

// Initialize an empty array to hold the authentication providers
let providers = [];

// Check if Google credentials are provided and add GoogleProvider to the providers array
if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  providers.push(
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  );
}

// Check if Twitter credentials are provided and add TwitterProvider to the providers array
if (process.env.TWITTER_CLIENT_ID && process.env.TWITTER_CLIENT_SECRET) {
  providers.push(
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
    })
  );
}

// Example: Custom Credentials Provider (uncomment and add to the providers array if used)
// providers.push([
//   CredentialsProvider({
//     name: 'Credentials',
//     credentials: {
//       username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
//       password: { label: 'Password', type: 'password' },
//     },

//     async authorize(credentials) {
//       // Custom authentication logic here
//       return null;
//     },
//   }),
//   LoginProvider,
//   SignupProvider,
//   VerifyEmailProvider,
//   MfaLoginProvider
// ]);

// Configuration options for NextAuth
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  callbacks: {
    // Handle JWT updates and custom logic here
    async jwt({ token, user, account, trigger, session }) {
      // Example: Handle session updates with NextAuth update function
      if (trigger === 'update') {
        // Custom logic for session updates
      }

      // Example: Handle different authentication providers (Google, Twitter, Custom Credentials)
      if (account?.provider === 'google') {
        // Custom logic for Google provider
      }
      if (account?.provider === 'twitter') {
        // Custom logic for Twitter provider
      }
      if (account?.provider === 'credentials') {
        // Custom logic for Custom Credentials provider
      }

      return token;
    },

    // Update session data based on JWT response
    async session({ session, token }) {
      // Custom session data handling logic here
      return session;
    },
  },
  session: {
    strategy: 'jwt', // Use JWT for session management
  },
  secret: process.env.NEXTAUTH_SECRET, // Set the NextAuth secret from environment variables
  providers, // Use the configured authentication providers
};

// Initialize NextAuth with the provided options
const handler = NextAuth(authOptions);

// Export the handler for both GET and POST requests (can be customized)
export { handler as GET, handler as POST };
