const User = require('../models/user');

exports.find = async (id) => {
    return await User.find({}).exec();
};


exports.findOne = async (id) => {
    return await User.findOne({_id: id}).exec();
};


exports.update = async (id, data) => {
    return await User.findOneAndUpdate({_id: id}, data).exec();
};