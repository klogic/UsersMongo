const assert = require('assert');
const User = require('../src/user');

describe('Create Records', ()=>{
  it('save a records', ()=>{
    const joe = new User({ name: "Joe"});

    joe.save();
  })
})