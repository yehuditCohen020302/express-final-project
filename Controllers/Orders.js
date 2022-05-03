const ordersModel = require('../models/Orders');
const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');


module.exports.get = async function (req, res, next) {
    try {
        const toget = await ordersModel.find();
        await res.send(toget);
    }
    catch (error) {
        next(error)
    }
}

// module.exports.getOrderByUser = async function (req, res, next) {
//     try {
//         const id = req.params.id;
//         const order = await ordersModel.find({ userId: id })//.populate('products.id');
//        // .populate({path: 'products.id'});

//         await res.send(order);
//     }
//     catch (error) {
//         next(error)
//     }
// }

module.exports.getOnOrder = async function (req, res, next) {
    try {
        const id = req.params.id;
        const order = await ordersModel.findOne({ _id: id }).populate('products.id');
       // .populate({path: 'products.id'});

        await res.send(order);
    }
    catch (error) {
        next(error)
    }
}

module.exports.addOrder = async function (req, res, next) {
    try {
        const { userId, date, amount, products } = req.body;
        let data = new ordersModel({
            userId: userId, date: date, amount: amount, products: products
        });
        const insertedOrder = await data.save();
        res.send(insertedOrder);
    }
    catch (error) {
        next(error)
    }
}


module.exports.updateOrder = async function (req, res, next) {
    try {
        
        const order = req.body;
        const { userId, date, amount } = order;
        await ordersModel.updateOne({ _id: ObjectId(req.params.id) },
            {
                $set:
                {
                    userId: userId,
                    date: date,
                    amount: amount
                }
            });
        res.send(`order by id ${req.params.id} update😊`)
    }
    catch (error) {
        next(error)
    }
}

module.exports.remove = async function (req, res, next) {
    try {
        const myOrder = req.body.id;
        const toDelete = await ordersModel.deleteOne({ 'id': myOrder });
        await res.send(toDelete);
    }
    catch (error) {
        next(error)
    }
}

