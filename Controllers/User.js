const userModel = require('../models/User');
const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
const logger = require('../Log/logger');


module.exports.getUser= async function (req, res, next) {
    try{
        debugger
        const toget = await userModel.find();
        await res.send(toget);
    }
    catch(error){
        next(error)
    }
}

module.exports.getOneUser = async function (req, res, next) {
    try {
        const fullName = req.params.fullName;
        const password = req.params.password;
        const user = await userModel.findOne({ fullName: fullName, password: password });
        await res.send(user);
    }
    catch (error) {
        next(error)
    }
}


module.exports.addUser = async function (req, res, next) {
    try {
        console.log(req.body, "req.body");
        const { fullName, email, password, Address} = req.body;
        let data = new userModel({
            fullName: fullName, email : email,password: password, Address:Address
        });
        const insertedUser = await data.save();
        res.send(insertedUser);
    }
    catch (error) {
        next(error)
    }
}


module.exports.updateUser = async function (req, res, next) {
    console.log("updateUser");
}

module.exports.removeUser = async function (req, res, next) {
    console.log("removeUser");
}
