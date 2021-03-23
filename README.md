# Activity Tracker

This is my approach to a code assesment regarding an activity tracker. It allows the user to track and perform certain activities that are friendlier during the pandemic outbreak of COVID. I relied on hooks for this app.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Some libraries that I have used and so are checked as dependencies are [axios](https://github.com/axios/axios) to manage the service query and [react-jss](https://github.com/cssinjs/jss/tree/master/packages/react-jss) to allow theming.

## Installation
The following installation is assuming you are using `yarn`. You can get and install `yarn` following this [guide](https://classic.yarnpkg.com/en/docs/install#windows-stable).
1. [Clone](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) or download this repository to a folder of your choice.
2. Run `yarn install` from the CLI whitin that folder.
3. Run `yarn start` to start the development server.

## Structure
* `/src/actions`: type definitions for all available actions
* `/src/components`: components used inside the application
* `/src/reducers`: functions that interact with the application state
* `/src/services`:  contain methods that maintain data throughout the life the application
* `/src/tests`: defines automated test scripts to meet application design

## About Services
This application does not consume an external API, but it is intended to do so. The current data is being mocked trough a public JSON called `mockUpActivities.json` inside the `public` folder.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
