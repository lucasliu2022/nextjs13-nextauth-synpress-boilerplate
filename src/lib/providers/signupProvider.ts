import CredentialsProvider from 'next-auth/providers/credentials';

// frontend code example
// await signIn('signup', {
//   ...signupData,
//   redirect: false,
//   callbackUrl: returnURL
// });

const signupProvider = CredentialsProvider({
  id: 'signup', // Unique identifier for this signup provider
  name: 'SIGNUP', // Name of the provider to be displayed in the NextAuth UI
  credentials: {
    // Define the credentials required for the signup process
    username: { label: 'Username', type: 'text' }, // Input field for username
    email: { label: 'Email', type: 'text' }, // Input field for email
    password: { label: 'Password', type: 'password' }, // Input field for password
    terms: { label: 'Terms', type: 'boolean' }, // Checkbox for accepting terms
  },
  async authorize(credentials) {
    try {
      // Check if credentials object is provided
      if (!credentials) {
        throw new Error('Invalid credentials');
      }

      // Prepare the parameters for the create user function
      const params = {
        username: credentials.username,
        email: credentials.email,
        password: credentials.password,
      };

      // Call the create user function (replace createUser with your actual create user function)
      // const user = await createUser(params);

      // If the create user function returns the newly created user, return it
      // if (!user) {
      //   throw new Error('Error creating a new user');
      // }
      // return user;

      // For this example, we're returning null as we don't have a real create user function
      return null;
    } catch (error: any) {
      console.error('Signup Error: ', error?.message);
      throw new Error('Error creating a new user');
    }
  },
});

export default signupProvider;
