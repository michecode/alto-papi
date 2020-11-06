const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const cors = require('cors');
require('dotenv/config');



const app = express();

// import routes
const plantRoute = require('./routes/plants')
const testRoute = require('./routes/testing')

// middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.use('/plants', plantRoute)
app.use('/test', testRoute)

router.get('/', async (req,res) => {
    res.send("you shouldn't being seeing me!!! :3")
});

// connect to db
mongoose.connect(
    process.env.PROD_DB_CONNECTION,
    {useNewUrlParser: true}
)
.then(() => console.log('Connected to DB'))
.catch(err => console.log(err))

// Listen
app.listen(4000);