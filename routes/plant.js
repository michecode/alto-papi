const express = require('express');
const router = express.Router();
const Plant = require('../models/plant')

router.get('/', (req,res) => {
    res.send('plant care page');
});

router.get('/specific', (req,res) => {
    res.send('specific plant page');
});

// router.post('/', (req,res) => {
//     const Plant = 
// })

module.exports = router;