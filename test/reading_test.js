const assert = require('assert');
const User = require('../src/user');

/* mocha structure test block 
- describe function(string, function)
  - it function(string, function)
  - it function(string, function)
  - it function(string, function)
*/

describe('Reading users out of database',()=>{
  // create user every time this test runing.
  beforeEach((done)=>{
    joe = new User({ name: 'Joe' });
    joe.save()
    .then(()=> done());
  });

  it('find all user with name joe', (done)=>{
    User.find({ name: 'Joe'})
      .then((users)=>{
        console.log(users);
        done();
      })
  });
});