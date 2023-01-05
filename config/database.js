module.exports = 'mongodb://localhost:27017/library';

const mongoose = require('mongoose');
const db = require('./config/database');

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});


