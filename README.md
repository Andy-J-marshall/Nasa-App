# Getting Started

## About
This website uses React and Express to display information about the solar system using NASA APIs. The API documentation can be found [here](http://api.nasa.gov/).

## Prerequisites
You will need to install [node](https://nodejs.org/en/download) and (optionally) [nodemon](https://www.npmjs.com/package/nodemon).
## Setting up the environment
Update the .env file with a valid API_KEY for the NASA public APIs. An API key can be generated [here](https://api.nasa.gov/index.html#signUp).

Then run:
* `npm i`
* `npm run start-ui` in one console
* `npm run start-api` in a second console

## Testing
There are a sample selection of unit tests and UI integration tests. The integration tests use Cypress, and there are tests that test the full end to end flow as well as using mocked responses from the API.
Note: ensure both the UI and API are running before running the UI tests.

## Available Scripts
In the project directory, you can run:

### `npm run start-ui`
Runs the UI in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

### `npm run start-api`
Runs the API using node on [http://localhost:3000](http://localhost:9000).
The API will reload if you make edits.

### `npm run start-api-dev-mode`
Runs the API using nodemon on [http://localhost:3000](http://localhost:9000).
The API will reload if you make edits.

### `npm run unit-tests`
This will run the unit tests in the `test/unit` folder.

### `npm run integration-tests`
This will run the UI integration tests in the `cypress/integration` folder in headless mode.

### `npm run cypress:open`
This will open the Cypress app and allow you to debug the UI tests.

### `npm run build-ui`
Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
