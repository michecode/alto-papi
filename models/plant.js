const mongoose = require('mongoose');

const PlantSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    quick: {
        name: String,
        scientificName: String,
        lifespan: String,
        classification: String,
        zones: String,
        indoor: Boolean,
        outdoor: Boolean,
        difficulty: String,
        growthSpeed: String,
        altNames: Array,
        required: true,
    },
    bio: {
        type: String,
        required: true,
        default: "hiiiiiii",
    },
    basic: {
        light: String,
        watering: String,
        fertilizer: String,
        toxicity: String,
        required: true,
    },
    environment: {
        humidity: String,
        soil: String,
        temperature: String,
        pests: String,
        required: true,
    },
    grooming: {
        pruning: String,
        repotting: String,
        propagation: String,
        required: true,
    },
    notes: String,
    commonIssues: Array,
})

module.exports = mongoose.model('Plants', PlantSchema);