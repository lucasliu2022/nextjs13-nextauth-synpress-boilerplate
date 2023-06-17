import CredentialsProvider from 'next-auth/providers/credentials';

// frontend code example
// await signIn('signup', {
//   ...signupData,
//   redirect: false,
//   callbackUrl: returnURL
// });

const signupProvider = CredentialsProvider({
  id: 'signup',
  name: 'SIGNUP',
  credentials: {
    username: { label: 'Username', type: 'text' },
    email: { label: 'Email', type: 'text' },
    password: { label: 'Password', type: 'password' },
    terms: { label: 'Terms', type: 'boolean' },
  },
  async authorize(credentials) {
    try {
      if (!credentials) {
        throw new Error('Invalid credentials');
      }
      const params = {
        username: credentials.username,
        email: credentials.email,
        password: credentials.password,
      };

      // create user function
      // const user = await createUser(params);
      // if (!user) {
      //   throw new Error('Error creating a new user');
      // }

      // return user;
      return null;
    } catch (error) {
      throw new Error('Error creating a new user');
    }
  },
});

export default signupProvider;
