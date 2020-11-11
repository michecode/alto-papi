const mongoose = require('mongoose');

// Schema for issues. Object array of sorts
const IssueSchema = mongoose.Schema({
    title: String,
    body: String,
})

const PlantSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    // BASICS/INFOS
    name: String,
    botanicalName: String,
    lifespan: String,
    classification: String,
    zones: String,
    tempRange: String,
    difficulty: String,
    growthSpeed: String,
    altNames: Array,
    // BIO
    bio: String,
    // BASIC CARE
    light: String,
    watering: String,
    misting: String,
    fertilizer: String,
    toxicity: String,
    // ENVIRONMENT
    humidity: String,
    soil: String,
    soilPH: String,
    temperature: String,
    pests: String,
    // GROOMING
    pruning: String,
    repotting: String,
    propagation: String,
    // OTHER
    notes: String,
    commonIssues: [IssueSchema],
})

// Goes to "plants" collection in DB
module.exports = mongoose.model('Plants', PlantSchema);