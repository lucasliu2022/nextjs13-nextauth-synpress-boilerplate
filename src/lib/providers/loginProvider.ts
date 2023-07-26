import CredentialsProvider from 'next-auth/providers/credentials';

// frontend code example
// await signIn('login', {
//   ...loginData,
//   redirect: false,
//   callbackUrl: returnURL
// });

const loginProvider = CredentialsProvider({
  id: 'login', // Unique identifier for this login provider
  name: 'LOGIN', // Name of the provider to be displayed in the NextAuth UI
  credentials: {
    // Define the credentials required for the login process
    email: { label: 'Email', type: 'text' }, // Input field for email
    username: { label: 'Username', type: 'text' }, // Input field for username
    password: { label: 'Password', type: 'password' }, // Input field for password
  },
  async authorize(credentials) {
    try {
      // Check if password is provided and either email or username is provided
      if (
        !credentials?.password ||
        (!credentials?.email && !credentials.username)
      ) {
        throw new Error('Invalid credentials');
      }

      // Prepare the parameters for the login function
      const params = {
        email: credentials?.email,
        username: credentials?.username,
        password: credentials.password,
      };

      // Call the login function (replace loginUser with your actual login function)
      // const user = await loginUser(params);

      // If the login function returns the authenticated user, return it
      // return user;

      // For this example, we're returning null as we don't have a real login function
      return null;
    } catch (error: any) {
      console.error('Login Error: ', error?.message);
      throw new Error(error?.message || 'Error logging in');
    }
  },
});

export default loginProvider;
