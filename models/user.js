const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: String,
    userId: String,
    phone: String
}, {_id: false});

const User = mongoose.model('User', userSchema, 'user');

module.exports = User;