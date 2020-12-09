# LAB - Class 02

## Project: basic-express-server

### Author: Ricardo Barcenas

### Links and Resources

- [ci/cd]() (GitHub Actions)
- [Heroku Production Deployment](https://ricardob-server-deploy-prod.herokuapp.com/)

### Setup

#### `.env` requirements (where applicable)

- `PORT` - 3000

#### How to initialize/run your application (where applicable)

- `npm start` to start the app

#### How to use your library (where applicable)

#### Tests

- How do you run tests?
  -  `npm test` to run the tests
- Any tests of note?
  - 404 on a bad route
  - 404 on a bad method
  - 500 if no name in the query string
  - 200 if the name is in the query string
  - given an name in the query string, the output object is correct

- Describe any tests that you did not complete, skipped, etc
  - app.listen needs a test

