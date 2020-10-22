const mongoose = require('mongoose');

const PlantSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    altNames: Array,
    bio: {
        type: String,
        required: true,
        default: "hiiiiiii",
    },
    watering: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Plants', PlantSchema);