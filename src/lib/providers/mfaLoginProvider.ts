import CredentialsProvider from 'next-auth/providers/credentials';

// frontend code example
// await signIn('mfa-login', {
//   ...codeInfo,
//   ticket,
//   redirect: false,
//   callbackUrl: `${window.location.origin}`
// });

const mfaLoginProvider = CredentialsProvider({
  id: 'mfa-login',
  name: 'MFA_LOGIN',
  credentials: {
    code: { label: 'Code', type: 'text' },
    ticket: { label: 'Ticket', type: 'text' },
  },
  async authorize(credentials) {
    try {
      if (!credentials?.code || !credentials?.ticket) {
        throw new Error('Invalid credentials');
      }
      const params = {
        code: credentials.code,
        ticket: credentials.ticket,
      };

      // MFA login function
      // const user = await loginUserWithMfa(params);
      // return user;
      return null;
    } catch (error: any) {
      console.error('Login Error: ', error?.message);
      throw new Error(error?.message || 'Error logging in');
    }
  },
});

export default mfaLoginProvider;
