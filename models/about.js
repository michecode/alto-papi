const mongoose = require('mongoose');

const AboutSchema = mongoose.Schema({
    title: String,
    description: String,
})