const { type } = require("express/lib/response");
const { MongoCredentials } = require("mongodb");
const mongoose = require("mongoose");
const Schama = mongoose.Schema;


const addressSchama = new Schama({
    city: {
        type: String,
        min: 3
    },
    street: {
        type: String,
    },
    numberHome: {
        type: Number,
        min: 1
    }
})

const userSchama = new Schama({
    fullName: {
        type: String,
        required: true,
        minlength: 5
    },
    email: {
        type: String
       

    },
    password: {
        type: String,
        required: true,
        min: 5
    },
    Address: { type: [addressSchama] }
}, { timestamps: true })


userSchama.set('toJSON', { virtuals: true })

module.exports = mongoose.model('user', userSchama)

