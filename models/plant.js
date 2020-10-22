const mongoose = require('mongoose');

const PlantSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    lifespan: {
        type: String,
        required: true,
    },
    classification: {
        type: String,
        required: true,
    },
    zones: {
        type: String,
        required: true,
    },
    indoor: {
        type: Boolean,
        required: true,
    },
    outdoor: {
        type: Boolean,
        required: true,
    },
    difficulty: {
        type: String,
        required: true,
    },
    altNames: Array,
    bio: {
        type: String,
        required: true,
        default: "hiiiiiii",
    },
    light: {
        type: String,
        required: true,
    },
    watering: {
        type: String,
        required: true,
    },
    humidity: {
        type: String,
        required: true,
    },
    soil: {
        type: String,
        required: true,
    },
    temperature: {
        type: String,
        required: true,
    },
    fertilizer: {
        type: String,
        required: true,
    },
    toxicity: {
        type: String,
        required: true,
    },
    notes: {
        Type: String,
    },
    commonIssues: {
        type: Array,
    }
})

module.exports = mongoose.model('Plants', PlantSchema);