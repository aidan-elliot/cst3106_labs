# Lab 7

## Overview
In this lab, I have integrated a server-side component to handle random dice generation for my Yahtzee application. The modifications were made within my Yatzy repository, and I've updated the lab repository with only the changed files.

## Implementation Details
- The Express server is configured to run on port `3001`.
- The React application is set to run on port `3000`.
- The `concurrently` npm package has been utilized to launch both the server and the client simultaneously.

## Setup Commands
To install the `concurrently` package, use the following command:

```bash
npm install concurrently --save-dev
```

To start both the Express server and the React application, execute:

```bash
npm run dev
```

## Testing
All tests to set up the local server and start the app have been conducted successfully.
