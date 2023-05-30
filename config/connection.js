const mongoose = require('mongoose');

const connectString = process.env.mongoLog 

mongoose.connect(connectString);

module.exports = mongoose.connection;