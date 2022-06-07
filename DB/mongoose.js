const mongoose = require('mongoose');

 const { MongoClient } = require('mongodb');

const dotenv = require('dotenv');
dotenv.config();

class MongooseClass {

    constructor() {
    }

    async connect() {
        const url = process.env.CONNECTION_STRING;
        const DATABASE_NAME = process.env.DATABASE_NAME;

//זה השורות שהוספתי כדי לחבר למוגואטלס
        // const uri = "mongodb+srv://yehuditCohen:<yehudit020302>@finallprojectus.m1aar.mongodb.net/?retryWrites=true&w=majority";
        // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        //  const collection = client.db("test").collection("devices");
        //  client.close();
//זה השורות שהוספתי כדי לחבר למוגואטלס

        await mongoose.connect(url);
        console.log(`we connected with mongoose`);
        console.log("welcomeeeeee😊");
    };

}

module.exports = new MongooseClass();
