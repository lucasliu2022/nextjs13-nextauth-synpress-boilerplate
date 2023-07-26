import CredentialsProvider from 'next-auth/providers/credentials';

// frontend code example
// await signIn('mfa-login', {
//   ...codeInfo,
//   ticket,
//   redirect: false,
//   callbackUrl: `${window.location.origin}`
// });

const mfaLoginProvider = CredentialsProvider({
  id: 'mfa-login', // Unique identifier for this MFA login provider
  name: 'MFA_LOGIN', // Name of the provider to be displayed in the NextAuth UI
  credentials: {
    // Define the credentials required for the MFA login process
    code: { label: 'Code', type: 'text' }, // Input field for the MFA code
    ticket: { label: 'Ticket', type: 'text' }, // Input field for the MFA ticket
  },
  async authorize(credentials) {
    try {
      // Check if both the MFA code and ticket are provided
      if (!credentials?.code || !credentials?.ticket) {
        throw new Error('Invalid credentials');
      }

      // Prepare the parameters for the MFA login function
      const params = {
        code: credentials.code,
        ticket: credentials.ticket,
      };

      // Call the MFA login function (replace loginUserWithMfa with your actual MFA login function)
      // const user = await loginUserWithMfa(params);

      // If the MFA login function returns the authenticated user, return it
      // return user;

      // For this example, we're returning null as we don't have a real MFA login function
      return null;
    } catch (error: any) {
      console.error('MFA Login Error: ', error?.message);
      throw new Error(error?.message || 'Error logging in with MFA');
    }
  },
});

export default mfaLoginProvider;
