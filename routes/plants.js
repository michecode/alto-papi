const express = require('express');
const { update } = require('../models/PlantDBM');
const router = express.Router();
const Plant = require('../models/PlantDBM')

// gets all plants
router.get('/', async (req,res) => {
    try{
        const plants = await Plant.find();
        res.json(plants)
    }catch(err) {
        res.json({message: err})
    }
});

// get specific post
router.get('/:plantId', async (req,res) => {
    try {
    const plant =  await Plant.findById(req.params.plantId)
    res.json(plant)
    console.log("get request for " + plant.name)
    } catch(err) {
        res.json({message: err})
    }
});

// submits plant
router.post('/', async (req,res) => {
    const plant = new Plant({
        _id: req.body._id,
        name: req.body.name,
        botanicalName: req.body.botanicalName,
        lifespan: req.body.lifespan,
        classification: req.body.classification,
        zones: req.body.zones,
        tempRange: req.body.tempRange,
        difficulty: req.body.difficulty,
        growthSpeed: req.body.growthSpeed,
        altNames: req.body.altNames,
        bio: req.body.bio,
        light: req.body.light,
        watering: req.body.watering,
        misting: req.body.misting,
        fertilizer: req.body.fertilizer,
        toxicity: req.body.toxicity,
        humidity: req.body.humidity,
        soil: req.body.soil,
        soilPH: req.body.soilPH,
        temperature: req.body.temperature,
        pests: req.body.pests,
        pruning: req.body.pruning,
        repotting: req.body.repotting,
        propagation: req.body.propagation,
        notes: req.body.notes,
        commonIssues: req.body.commonIssues
    });

    try {
        const savedPlant = await plant.save();
    res.json(savedPlant);
    } catch(err) {
        res.json({message: err})
    }
})

// update plant
router.patch('/plants/:plantId', async (req,res) => {
    const Plant = new Plant({
        title: req.body.name,
        altNames: req.body.altNames,
        bio: req.body.bio,
        watering: req.body.watering,
    });

    try {
        const updatedPlant = await Plant.updateOne({_id: req.params.plantId}, { $set: {name: req.body.name}})
        res.json(updatedPlant)
    } catch(err) {
        res.json({message: err})
    }
})

// delete plant
router.delete('/plants/:plantId', async (req,res) => {
    try {
        const removedPlant = await Plant.remove({_id: req.params.plantId})
        res.json(removedPlant)
    } catch(err) {
        res.json({message: err})
    }
})


module.exports = router;