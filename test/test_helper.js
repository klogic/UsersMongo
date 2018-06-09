const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users_test');
mongoose.connection
  .once('open', ()=> console.log('connect database working'))
  .on('error', (error)=> console.warn('Warning', error))

beforeEach((done)=>{
  mongoose.connection.collections.users.drop(()=>{
    done();
  })
});
