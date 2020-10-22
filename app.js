const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');



const app = express();

// import routes
const aboutRoute = require('./routes/about')
const plantRoute = require('./routes/plant')

// middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.use('/about', aboutRoute)
app.use('/plant', plantRoute)

// connect to db
try {
    mongoose.connect(
        process.env.DB_CONNECTION,
        {useNewUrlParser: true},
        () => console.log("connected to db")
    );
} catch(err) {
    res.json({message: err})
}

// Listen
app.listen(4000);