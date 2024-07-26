# LiveDocs - A live text editor built using NextJs and LiveBlocks

# Demo Link
![[LiveDocs](https://livedocs.harshit.dev/)](./public/assets/icons/logo.svg)

LiveDocs is a live text editor built using NextJs and LiveBlocks. It allows you to write and edit text in real-time with other users. It is built using NextJs, LiveBlocks.

## Usage

### Prerequisites
- To run the project, you need to have NodeJs 20+ installed on your machine. You can install NodeJs from [here](https://nodejs.org/).
- Create an account on Clerk.com and create a new NextJs application to get the API keys. You can create an account [here](https://clerk.com/), update them in the `.env` file.
- Create a liveblocks account and get the API keys. You can create an account [here](https://liveblocks.io/), update them in the `.env` file.
- [Optional] Create a sentry account and get SENTRY_AUTH_TOKEN, SENTRY_DSN, SENTRY_ORG, SENTRY_PROJECT. You can create an account [here](https://sentry.io/), update them in the `.env` file.

1. Clone the repository
2. Run `npm install` to install the dependencies
3. Run `npm run dev` to start the development server
4. Open `http://localhost:3000` in your browser

## Features
- Real-time collaboration
- Syntax highlighting
  
## Tech Stack
- [NextJs 14](https://nextjs.org/)
- [LiveBlocks](https://liveblocks.io/)
- [Clerk](https://clerk.com/)
- [Sentry](https://sentry.io/)
- [TailwindCSS](https://tailwindcss.com/)
