# Next.js 13 Tailwind Boilerplate with NextAuth.js and Synpress(Cypress)

This repository is a Next.js boilerplate project that includes NextAuth.js for authentication, Cypress for end-to-end testing, and Tailwind CSS for styling. It is built with TypeScript to provide type safety and better developer experience.

## Features

- Next.js for server-side rendering and frontend development.
- NextAuth.js for authentication with custom login, MFA, signup, and email providers.
- Tailwind CSS for easy and flexible styling.
- TypeScript for static typing and improved code quality.
- Synpress(Cypress) for end-to-end testing and test automation.

## Prerequisites

Make sure you have the following installed on your machine:

- Node.js (https://nodejs.org)
- npm (comes with Node.js)
- yarn (optional, but recommended) (https://yarnpkg.com)

## Getting Started

1. Clone this repository to your local machine:

```
git clone https://github.com/jdawkinsdew/nextjs-tailwind-boilerplate.git
cd nextjs-tailwind-boilerplate
```

2. Install the dependencies using npm or yarn:

```
npm install

# or

yarn install
```

3. Configure NextAuth.js:

In order to use authentication features, you need to configure NextAuth.js. The necessary files are already set up in the `src/auth` directory. Open `src/auth/[...nextauth].ts` and update the configuration according to your authentication providers and settings.

4. Set environment variables:

Create a `.env.local` file in the root of the project and set the required environment variables. Refer to `.env.example` for the list of required variables.

5. Run the development server:

```
npm run dev

# or

yarn dev
```

The development server will start, and you can access your application at `http://localhost:3000`.

## Testing with Synpress

Synpress is set up in this project for end-to-end testing. To run the Synpress tests, you need to create test scripts in `/tests/e2e/specs` directory.
And use the following command:

```
npm run sy:open

# or

yarn sy:open
```

This will open the Cypress test runner, and you can execute the tests from there.

## Building and Deployment

To build the production-ready version of your app, use the following command:

```
npm run build

# or

yarn build
```

This will create an optimized build of your application in the `build` directory.

For deployment, follow the recommended deployment process for Next.js applications.
