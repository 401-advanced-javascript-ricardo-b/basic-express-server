'use strict';

const express = require('express');
const app = express();

const validator = require('./middleware/validator');
const notFoundHandler = require('./error-handler/404');
const errorHandler = require('./error-handler/500');

//log a request
const logRequest = require('./middleware/logger');

//express assigns this as middleware
//applies to all routes
// app.use(logRequest);
// app.use(validator);

//body parser accepts JSON
app.use(express.json());

// app.get('/', logRequest, validator, (req, res)=>{
//   res.status(200).send('Hello World');
// })

app.get('/person', logRequest, validator, (req, res)=>{
  const name = req.query.name;
  res.status(200).json({name});
});

app.use('*', notFoundHandler);
app.use(errorHandler);

function start(PORT){
  app.listen(PORT, () =>{
    console.log(`listening on ${PORT}`);
  })
}

module.exports = {
  server: app,
  start: start
}
