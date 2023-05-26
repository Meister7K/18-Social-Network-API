const mongoose = require('mongoose');

mongoose.connect(mongoLog);

module.exports = mongoose.connection;