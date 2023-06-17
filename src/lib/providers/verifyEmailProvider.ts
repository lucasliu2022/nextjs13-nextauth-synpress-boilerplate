import CredentialsProvider from 'next-auth/providers/credentials';

// frontend code example
// await signIn('verify-email', {
//   token,
//   redirect: false
// });

const verifyEmailProvider = CredentialsProvider({
  id: 'verify-email',
  name: 'VERIFY_EMAIL',
  credentials: {
    token: { label: 'Token', type: 'text' },
  },
  async authorize(credentials) {
    try {
      if (!credentials) {
        throw new Error('Invalid credentials');
      }

      // verify email function
      // const user = await verifyEmail(credentials.token);
      // if (!user) {
      //   throw new Error('Error verifying a user email');
      // }

      // return user;
      return null;
    } catch (error) {
      throw new Error('Error verifying a user email');
    }
  },
});

export default verifyEmailProvider;
