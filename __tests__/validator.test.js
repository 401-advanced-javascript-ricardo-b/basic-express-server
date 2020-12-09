'use strict';

const {server} = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('validator', ()=>{
  it('should respond with a 500 if no name in the query string', ()=>{
    return mockRequest
      .get('/person')
      .then(results=>{
        expect(results.status).toBe(500)
      })
  })

  it('should respond with a 200 if the name is in the query string', ()=>{
    return mockRequest
    .get('/person?name=Ricardo')
    .then(results=>{
      expect(results.status).toBe(200);
    })
  })
  
  it('with a given an name in the query string, the output object is correct', ()=>{
    return mockRequest
    .get('/person?name=Ricardo')
    .then(results=>{
      expect(results.body).toEqual({name: 'Ricardo'})
    })
  })
})