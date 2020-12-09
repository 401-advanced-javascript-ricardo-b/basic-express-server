# LAB - Class 02

## Project: basic-express-server

### Author: Ricardo Barcenas

### Links and Resources

- [ci/cd](https://github.com/401-advanced-javascript-ricardo-b/basic-express-server/actions) (GitHub Actions)
- [Heroku Production Deployment](https://ricardob-basic-express-server.herokuapp.com/?name=Ricardo)
- [Pull request](https://github.com/401-advanced-javascript-ricardo-b/basic-express-server/pull/1)

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

