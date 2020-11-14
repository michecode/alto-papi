const express = require('express');
const { update } = require('../models/PlantDBM');
const router = express.Router();
const winston = require('winston');
const Plant = require('../models/PlantDBM')

// gets all plants
router.get('/', async (req,res) => {
    try{
        const plants = await Plant.find();
        res.json(plants)
        logger.info("All Plants", {timestamp: Date.now()})
    }catch(err) {
        res.json({message: err})
    }
});

/*
GET specific plant -
*/
router.get('/:plantId', async (req,res) => {
    try {
    const plant =  await Plant.findById(req.params.plantId)
    res.json(plant)
    logger.info(plant.name, {timestamp: Date.now()})
    } catch(err) {
        res.json({message: err})
    }
});

// submits plant
// router.post('/', async (req,res) => {
//     const plant = new Plant({
//         _id: req.body._id,
//         name: req.body.name,
//         botanicalName: req.body.botanicalName,
//         lifespan: req.body.lifespan,
//         classification: req.body.classification,
//         zones: req.body.zones,
//         tempRange: req.body.tempRange,
//         difficulty: req.body.difficulty,
//         growthSpeed: req.body.growthSpeed,
//         altNames: req.body.altNames,
//         bio: req.body.bio,
//         light: req.body.light,
//         watering: req.body.watering,
//         misting: req.body.misting,
//         fertilizer: req.body.fertilizer,
//         toxicity: req.body.toxicity,
//         humidity: req.body.humidity,
//         soil: req.body.soil,
//         soilPH: req.body.soilPH,
//         temperature: req.body.temperature,
//         pests: req.body.pests,
//         pruning: req.body.pruning,
//         repotting: req.body.repotting,
//         propagation: req.body.propagation,
//         notes: req.body.notes,
//         commonIssues: req.body.commonIssues
//     });

//     try {
//         const savedPlant = await plant.save();
//     res.json(savedPlant);
//     } catch(err) {
//         res.json({message: err})
//     }
// })

// update plant
// router.patch('/plants/:plantId', async (req,res) => {
//     const Plant = new Plant({
//         title: req.body.name,
//         altNames: req.body.altNames,
//         bio: req.body.bio,
//         watering: req.body.watering,
//     });

//     try {
//         const updatedPlant = await Plant.updateOne({_id: req.params.plantId}, { $set: {name: req.body.name}})
//         res.json(updatedPlant)
//     } catch(err) {
//         res.json({message: err})
//     }
// })

// // delete plant
// router.delete('/plants/:plantId', async (req,res) => {
//     try {
//         const removedPlant = await Plant.remove({_id: req.params.plantId})
//         res.json(removedPlant)
//     } catch(err) {
//         res.json({message: err})
//     }
// })

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        /*
        Write all logs with level 'error' and below to 'error.log'
        Write all logs with level 'info' and below to 'combined.log'
        */
       new winston.transports.File({ filename: '/opt/logs/error.log', level: 'error' }),
       new winston.transports.File({ filename: '/opt/logs/combined.log '}),
    ],
});

module.exports = router;