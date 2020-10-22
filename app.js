const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config')


const app = express();

// import routes
const aboutRoute = require('./routes/about')
const plantRoute = require('./routes/plant')

// middleware

app.use('/about', aboutRoute)
app.use('/plant', plantRoute)

// connect to db
mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true},
    () => console.log("connected to db")
);

// Listen
app.listen(4000);