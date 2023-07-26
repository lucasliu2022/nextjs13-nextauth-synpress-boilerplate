import CredentialsProvider from 'next-auth/providers/credentials';

// frontend code example
// await signIn('verify-email', {
//   token,
//   redirect: false
// });

const verifyEmailProvider = CredentialsProvider({
  id: 'verify-email', // Unique identifier for this verify email provider
  name: 'VERIFY_EMAIL', // Name of the provider to be displayed in the NextAuth UI
  credentials: {
    // Define the credentials required for the verify email process
    token: { label: 'Token', type: 'text' }, // Input field for the verification token
  },
  async authorize(credentials) {
    try {
      // Check if credentials object is provided
      if (!credentials) {
        throw new Error('Invalid credentials');
      }

      // Call the verify email function (replace verifyEmail with your actual verify email function)
      // const user = await verifyEmail(credentials.token);

      // If the verify email function returns the verified user, return it
      // if (!user) {
      //   throw new Error('Error verifying a user email');
      // }
      // return user;

      // For this example, we're returning null as we don't have a real verify email function
      return null;
    } catch (error: any) {
      console.error('Verify Email Error: ', error?.message);
      throw new Error('Error verifying a user email');
    }
  },
});

export default verifyEmailProvider;
