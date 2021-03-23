const express = require('express');
const router = express.Router();
const eventsController = require('../../controllers/events');

router.get('/getAllEvents', eventsController.getAllEvents);
router.get('/getSpecificEvent/:id', eventsController.getSpecificEvent);
router.delete('/deleteEvent/:id', eventsController.deleteEvent);
router.put('/updateEvent/:id', eventsController.updateEvent);
router.post('/createEvent', eventsController.createEvent);

module.exports = router;