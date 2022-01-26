# Getting Started

## About
This website uses React and Express to display information about the solar system using NASA's public APIs. The NASA API documentation can be found [here](http://api.nasa.gov/).

## Prerequisites
You will need to install the following:
* [node](https://nodejs.org/en/download) and (optionally) [nodemon](https://www.npmjs.com/package/nodemon).
* [Docker](https://www.docker.com/)
* If on macOS then install make e.g. `brew install make` 
## Setting up the environment
Update the .env file with a valid API_KEY for the NASA public APIs. An API key can be generated [here](https://api.nasa.gov/index.html#signUp).

If on macOS, run:
* `npm i`
* `make setup_local_infra`

or run:
* `npm i`
* `npm run start-app`

## Testing
There are a sample selection of unit tests and UI integration tests. The integration tests use Cypress, and there are tests that test the full end to end flow as well as using mocked responses from the API.
* `npm run unit-tests`
* `npm run integration-tests`

## Troubleshooting
Below are some common troubleshooting steps:
* Ensure both the UI and API are running before running the UI tests
* Make sure Docker is installed and running, and that is has been allocated enough resources
* Make sure you have entered your API_KEY as an environment variable
* After quitting the app, check that Docker has automatically cleared up the containers (`docker ps`). If not then manually stop them (`docker stop [containerId]`)

## Available Scripts
In the project directory, you can run:

### `npm run start-app`
Runs the UI in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
Runs the API using node on [http://localhost:9000](http://localhost:9000).

### `npm run unit-tests`
This will run the unit tests in the `test/unit` folder.

### `npm run integration-tests`
This will run the UI integration tests in the `cypress/integration` folder in headless mode.

### `npm run cypress:open`
This will open the Cypress app and allow you to debug the UI tests.

<!-- TODO commit a .env file -->