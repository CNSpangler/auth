require('dotenv').config();
const User = require('./User');

describe('User model', () => {
  it('hashes the password', () => {
    const user = new User({
      username: 'mario',
      password: 'itsame'
    });

    expect(user.passwordHash).toEqual(expect.any(String));
    expect(user.toJSON().password).toBeUndefined();
  });


});
