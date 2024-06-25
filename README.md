# Lottie Editor

Lottie Editor is a React application for editing Lottie animations. 
It provides an intuitive interface to modify, update, and delete layers and shapes within Lottie animations.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Import Lottie animations from file upload (JSON)
- Import Lottie animations from top featured animations from LottieFiles
- Update animation speed
- Update shape colors
- Delete layers
- Real-time synchronization with the server
- Collaboration with multiple users just by sharing the working url
- Responsive design

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/karanhudia/lottie-editor.git
   cd lottie-editor

2. **Install dependencies:**

   ```sh
   yarn
   
3. **Set up environment variables:**

   Create a .env (or .env.local) file in the root of the project and add the following environment variables:

   ```sh
   // Option 1 -- when running the frontend only app
   
   REACT_APP_WEBSOCKET_URL=https://lottie-editor.onrender.com/
   REACT_APP_LOTTIE_SERVER_GRAPHQL_URL=https://lottie-editor.onrender.com/graphql
   REACT_APP_LOTTIEFILES_GRAPHQL_URL=https://graphql.lottiefiles.com
   
   // Option 2 -- when running the server locally
   
   REACT_APP_WEBSOCKET_URL=ws://localhost:4000
   REACT_APP_LOTTIE_SERVER_GRAPHQL_URL=http://localhost:4000/graphql
   REACT_APP_LOTTIEFILES_GRAPHQL_URL=https://graphql.lottiefiles.com

4. **Setting up the server locally:**
   
   Please refer to using [this repository](https://github.com/karanhudia/lottie-server) to locally setup the server.

## Usage

   To start the development server, run:

   ```
   yarn start
   ```
   
   This will start the React application and open it in your default web browser on http://localhost:3000. 
   The app will reload automatically as you make changes to the code.

## Scripts

   ```
   yarn start: Starts the development server.
   yarn build: Builds the app for production.
   yarn test: Runs the test suite.
   yarn codegen: Generates the GraphQL types for all schemas
   yarn type-check: Runs type check
   yarn lint: Runs linting for the project
   yarn deploy: Deploys manually on the github pages
   yarn eject: Ejects the Create React App configuration. Use with caution.
   ```

## Testing

   The project uses React Testing Library for unit and integration tests.

   To run the test suite, use: ```yarn test```

## Project Structure
   
   ```text
   src/
   ├── api/              # Typed implementation of fetch api
   ├── assets/           # Assets to be used by application
   ├── components/       # React components
   ├── context/          # React context for shared props
   ├── graphql/          # GraphQL schema and queries
   ├── hooks/            # Custom React hooks
   ├── pages/            # Pages for react router
   ├── test/             # Test related mocks and utils
   ├── types/            # Shared typescript types
   ├── utils/            # Utility functions
   ├── App.tsx           # Main application component
   ├── index.tsx         # Entry point of the application
   └── styles/           # Styling files
   ```

## GraphQL and Codegen

   We are using [graphql-codegen](https://the-guild.dev/graphql/codegen) to generate GraphQL types for the schemas used.
   You can find the configuration file for the [codegen here](https://github.com/karanhudia/lottie-editor/blob/main/codegen.ts). 

   The script has to be run everytime you want to fetch new types from the servers. The changes need to be pushed in the commit. 

## Routing

   This project is using [Hash Routing](https://reactrouter.com/en/main/router-components/hash-router) from react-router.
   So you will see a `#` in your url when editing a lottie.

## Deployment

   The app uses `github-pages` in the [deploy.yml](https://github.com/karanhudia/lottie-editor/blob/main/.github/workflows/deploy.yml) 
   pipeline to automatically trigger a deployment on this url.

   https://karanhudia.github.io/lottie-editor/
   
## Contributing

   I welcome contributions to improve Lottie Editor! Here’s how you can contribute:

   - Fork the repository.
   - Create a new branch with a descriptive name.
   - Make your changes.
   - Ensure all tests pass.
   - Open a pull request describing your changes.

## License

   This project is licensed under the MIT License.

   Feel free to reach out if you have any questions or need further assistance. Happy coding!
