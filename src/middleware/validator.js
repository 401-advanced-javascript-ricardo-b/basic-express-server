'use strict';

module.exports = (req, res, next)=>{
  if(req.query.name){
    next();
  }else{
    res.status(500).send('No name property').next('No name property')
  }
}