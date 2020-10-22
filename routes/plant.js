const express = require('express');
const { update } = require('../models/plant');
const router = express.Router();
const Plant = require('../models/plant')

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
    } catch(err) {
        res.json({message: err})
    }
});

// submits plant
router.post('/', async (req,res) => {
    const plant = new Plant({
        _id: req.body._id,
        name: req.body.name,
        altNames: req.body.altNames,
        bio: req.body.bio,
        watering: req.body.watering,
        soil: req.body.soil,
    });

    try {
    const savedPlant = await plant.save();
    res.json(savedPlant);
    } catch(err) {
        res.json({message: err})
    }
})

// update plant
router.patch('/plant/:plantId', async (req,res) => {
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
router.delete('/plant/:plantId', async (req,res) => {
    try {
        const removedPlant = await Plant.remove({_id: req.params.plantId})
        res.json(removedPlant)
    } catch(err) {
        res.json({message: err})
    }
})


module.exports = router;