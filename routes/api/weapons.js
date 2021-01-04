const express = require('express');
const router = express.Router();
const weaponsController = require('../../controllers/weapons');

router.get('/all_weapons', weaponsController.getAllWeapons);

module.exports = router; 