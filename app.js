
const db = require('./DB/mongoose')
const user = require('./Routs/User');

const logger = require('./Log/logger')
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();


// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://yehuditCohen:<yehudit020302>@finallprojectus.m1aar.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
const port = process.env.PORT;

db.connect();

// app.use(express.static('Static'))
app.use(express.json());



const cors = require("cors");
app.use(cors()) // Use this after the variable declaration


app.use('/api/User', user);

app.use((err, req, res, next) => {
    if (process.env.ENVIROMENT == "development")
        logger.error(err.message);
    res.status(500).send('oooooof Something broke! 😒')
})

app.use((req, res) => {

    res.status(404).sendFile(path.join(__dirname, '/html.html'));

})
// const nDate = new Date().toLocaleString('en-US', {
//     timeZone: 'Israel'
//   });
//   console.log(nDate);

// const collection = client.db("test").collection("devices");
// client.close();


 logger.error('error😳😵🥴');
 app.listen(port, () => logger.info(`Hello server, we are running on ${port}`))


