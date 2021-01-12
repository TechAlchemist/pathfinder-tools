const express = require('express');
const router = express.Router();
const magicItemsController = require('../../controllers/magic_items');

router.get('/all_magic_items', magicItemsController.getAllMagicItems);

module.exports = router; 