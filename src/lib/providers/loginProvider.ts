import CredentialsProvider from 'next-auth/providers/credentials';

// frontend code example
// await signIn('login', {
//   ...loginData,
//   redirect: false,
//   callbackUrl: returnURL
// });

const loginProvider = CredentialsProvider({
  id: 'login',
  name: 'LOGIN',
  credentials: {
    email: { label: 'Email', type: 'text' },
    username: { label: 'Username', type: 'text' },
    password: { label: 'Password', type: 'password' },
  },
  async authorize(credentials) {
    try {
      if (
        !credentials?.password ||
        (!credentials?.email && !credentials.username)
      ) {
        throw new Error('Invalid credentials');
      }
      const params = {
        email: credentials?.email,
        username: credentials?.username,
        password: credentials.password,
      };

      // login function
      // const user = await loginUser(params);
      // return user;
      return null;
    } catch (error: any) {
      console.error('Login Error: ', error?.message);
      throw new Error(error?.message || 'Error logging in');
    }
  },
});

export default loginProvider;
