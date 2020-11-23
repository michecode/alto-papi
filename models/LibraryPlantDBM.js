const mongoose = require('mongoose');

const LibraryPlantSchema = mongoose.Schema({
    name: String,
    plantID: String,
})

// Goes to "library" collection in DB
/*
const Tank = mongoose.model('Tank', schema);
this will look in the tanks collection
first argument is the singular name of the collection your model is for
mongoose automatically looks for the plural, lowercased version of your model name
*/
module.exports = mongoose.model('LibraryPlant', LibraryPlantSchema);