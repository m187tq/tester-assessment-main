# Instructions

You have been provided with a web application with a simple login and home pages.

We are a remote team so it is very important that the interview shows that you are capable of communicating while working remotely.

Intall the application dependencies and test harness with:

```sh
npm install
```

## Running the application

You can start the application alone:

```sh
npm run dev
```

It'll be live on http://localhost:3000

## Business requirements

- Email address must follow format `<name>@<domain>.com` or `.co.uk` or `.it`
- Password should be at least 8 characters long, contain a mix of upper and lower case letters, numbers and at least one special character
- Validation message should be displayed if password or email are in the incorrect format
- User can use SUBMIT button or ENTER to validate content
- Upon entering a valid user name and password - you are taken through to a screen with a welcome message

Note: As this is just a frontend assessment, there are no correct details as it is not backed by a database. Therefore you can expect that any valid credentials will be accepted by the system.

## Instructions

Create automated tests, with either Cypress, Playwright, or another tool of your choice, to cover the above requirements

## Running Cypress testing suite

The app has been configured with a Cypress test harness.

Start the application and launch Cypress Test Runner with:

```sh
npm run cypress
```

## Running Playwright testing suite

The app has been configured with a Playwright test harness.

Start the application and run the Playwright tests with with:

```sh
npm run playwright
```
