const express = require('express');
const router = express.Router();
const placesController = require('../../controllers/places');

router.get('/getAllPlaces', placesController.getAllPlaces);
router.get('/getSpecificPlace/:id', placesController.getSpecificPlace);
router.delete('/deletePlace/:id', placesController.deletePlace);
router.put('/updatePlace/:id', placesController.updatePlace);
router.post('/createPlace', placesController.createPlace);

module.exports = router;