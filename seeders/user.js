const bcrypt = require('bcrypt');
const User = require('../models/user');

const users = [
  {
    username: 'JaneDoe',
    email: 'jane.doe@example.com',
    password: bcrypt.hashSync('password', 10),
  },
  {
    username: 'JohnDoe',
    email: 'john.doe@example.com',
    password: bcrypt.hashSync('password', 10),
  },
  {
    username: 'BobSmith',
    email: 'bob.smith@example.com',
    password: bcrypt.hashSync('password', 10),
  },
  {
    username: 'AliceJones',
    email: 'alice.jones@example.com',
    password: bcrypt.hashSync('password', 10),
  },
  {
    username: 'MikeWilson',
    email: 'mike.wilson@example.com',
    password: bcrypt.hashSync('password', 10),
  },
];

const seedUsers = async () => {
  try {
    await User.deleteMany();
    await User.insertMany(users);
    console.log('Seeded users successfully.');
  } catch (error) {
    console.error(error);
  }
};

module.exports = seedUsers;
