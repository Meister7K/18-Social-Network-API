const mongoose = require('mongoose');

const connectString = process.env.mongoLog || 'mongodb+srv://7K:Password@classactivities.wtfnuyp.mongodb.net/socialDB'

mongoose.connect(connectString);

module.exports = mongoose.connection;