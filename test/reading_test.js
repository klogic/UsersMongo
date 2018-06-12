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
    joe = new User({ name: 'Joe' }); //normally assumion _id by it self before save
    joe.save()
    .then(()=> done());
  });

  it('find all user with name joe', (done)=>{
    User.find({ name: 'Joe'})
      .then((users)=>{
        /* 
        checking joe & users        
        console.log(users[0]._id)
        console.log(joe._id)
        */
        assert(users[0]._id.toString() === joe._id.toString())
        done();
      })
  });
});