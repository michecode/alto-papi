const express = require('express');

const router = express.Router();

router.get('/', (req,res) => {
    res.send('about page');
});

router.get('/specific', (req,res) => {
    res.send('specific about page');
});

module.exports = router;