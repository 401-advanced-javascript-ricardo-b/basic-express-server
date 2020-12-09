'use strict';

module.exports = (req, res, next)=>{
  console.log(`__REQUEST__ method: ${req.method}, path: ${req.path}`);
  next();
}
