const userService = require('../services/user.service');


exports.getUsers = async () => {
    return await userService.find();
};