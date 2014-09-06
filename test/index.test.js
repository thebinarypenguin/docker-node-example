/*jshint expr: true*/

var should  = require('should'),
    request = require('supertest'),
    server = require('../src/server.js');

describe('GET /', function() {
  it('Response code should be 200 OK', function(done) {
    request(server).get('/').expect(200, done);
  });

  it('Response body should be "Hello World"', function(done) {
    request(server).get('/').expect("Hello World", done);
  });
});
