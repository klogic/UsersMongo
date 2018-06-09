const mongoose = require('mongoose');

// before is mocha hook. doing this fist and only 1 time
before((done)=>{
  mongoose.connect('mongodb://localhost/users_test');
  mongoose.connection
    .once('open', ()=> { done() })
    .on('error', (error)=> console.warn('Warning', error))
})

// beforeEach is mocha hook too. but doing it everytime before test 
beforeEach((done)=>{
  mongoose.connection.collections.users.drop(()=>{
    done();
  })
});
