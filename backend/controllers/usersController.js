const userModel = require("../models/userModel");
module.exports.register = async (req, res) => {
    return res.status(201).json({msg: 'Your account has been created!'});
}