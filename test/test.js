const app = require('../app.js');
const request = require('supertest')(app);

describe('GET', function(){
  it('respond with text/html', function(done){
    request
    .get('/')
    .set('Accept', 'text/html')
    .expect('Content-Type', /html/)
    .expect(200, done);
  })

  it('respond with Ravindra Nayak', function(done){
    request
    .get('/')
    .set('Accept', 'text/html')
    .expect(200, /Ravindra Nayak had a farm/ig, done);
  })

  it('/api responds with json', function(done){
    request
    .get('/api')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done);
  })

  it('/api responds with animals object', function(done){
    request
    .get('/api')
    .set('Accept', 'application/json')
    .expect(200, {"cat":"meow","dog":"bark","cow":"moe","lion":"roar"}, done);
  })
})
