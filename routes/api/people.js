const express = require('express');
const router = express.Router();
const peopleController = require('../../controllers/people');

router.get('/getAllPeople', peopleController.getAllPeople);
router.get('/getSpecificPerson/:id', peopleController.getSpecificPerson);
router.delete('/deletePerson/:id', peopleController.deletePerson);
router.put('/updatePerson/:id', peopleController.updatePerson);
router.post('/createPerson', peopleController.createPerson);

module.exports = router;