const express = require('express');
const router = express.Router();

const Plant = require('../models/PlantDBM')

router.get('/', async (req,res) => {
    res.send("hello :)")
});

module.exports = router;