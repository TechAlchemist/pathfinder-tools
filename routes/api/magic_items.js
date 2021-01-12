const express = require('express');
const router = express.Router();
const magicItemsController = require('../../controllers/magic_items');

router.get('/all_magic_items', magicItemsController.getAllMagicItems);
router.get('/ammunitions', magicItemsController.getAmmunitions);
router.get('/armors', magicItemsController.getArmors);
router.get('/artifacts', magicItemsController.getArtifacts);
router.get('/cursed_items', magicItemsController.getCursedItems);
router.get('/magical_tattoos', magicItemsController.getMagicalTattoos);
router.get('/potions', magicItemsController.getPotions);
router.get('/rings', magicItemsController.getRings);
router.get('/rods', magicItemsController.getRods);
router.get('/shadow_piercings', magicItemsController.getShadowPiercings);
router.get('/staves', magicItemsController.getStaves);
router.get('/weapons', magicItemsController.getWeapons);
router.get('/wondrous_items', magicItemsController.getWondrousItems);





module.exports = router; 