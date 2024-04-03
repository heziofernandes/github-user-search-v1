<h1 align="center"> Github User Search </h1> <br>

<div align="center">
<img src="./src/assets/github/github-search-user.png" />
</div>

## Introduction

This is a basic project that search for a user on github and then returns a few of the user data and it's repositories's names and descriptions.
## Table of Contents:
  ### [Running the Tests](#how-to-run-the-tests)
  ### [Test Report](#report)

## Demo

https://user-images.githubusercontent.com/56850413/165952437-1cba04ef-4b68-4f3c-86aa-c69f70086a2d.mp4

## How to get up and running

Clone or download the repo

- `yarn` to install dependencies
- `yarn dev` to run the project in development mode

## How to commit into this repo?

- `git commit` since this repo uses husky and cli commitlint, a frindly cli will appear to help you commit a clear message

## How to run the tests


Unit and integration testing (Jest and RTL)

After installing the dependencies (`yarn install`)
- `yarn test` to run all unit and integration tests


Test E2E with Cypress
- `yarn dev` to run the project in development mode
- `yarn cy:open` to run tests in Launchpad mode
  - Choose a testing type
  - Launch a browser
- `yarn cy:test` to run tests in CLI mode


## Test Report

- In CLI mode, run: `yarn cy:run` a new report will be generated after running the tests.
- Access the file at: cypress/reports/html/index.html
- Open this file in the browser

## Disclaimer

The github api is public and it has a limit of 60 request for a unauthenticated user
