// These are read and then stored in memory as long as the server is running.

const allMagicItemsJSON = require('../resources/json/magic_items_full.json');
const ammunitions = require('../resources/json/magic_items_ammunitions.json');
const armors = require('../resources/json/magic_items_armor');
const artifacts = require('../resources/json/magic_items_artifacts.json');
const cursedItems = require('../resources/json/magic_items_cursed_items.json');
const magicalTattoos = require('../resources/json/magic_items_magical_tattoos.json');
const potions = require('../resources/json/magic_items_potions.json');
const rings = require('../resources/json/magic_items_rings.json');
const rods = require('../resources/json/magic_items_rods.json');
const shadowPiercings = require('../resources/json/magic_items_shadow_piercings.json');
const staves = require('../resources/json/magic_items_staves.json');
const weapons = require('../resources/json/magic_items_weapons.json');
const wondrousItems = require('../resources/json/magic_items_wondrous_items.json');

// All magic items
function getAllMagicItems(req, res) {
    res.json(allMagicItemsJSON);
}

// Ammos
function getAmmunitions(req, res) {
    res.json(ammunitions);
}

// Armors 
function getArmors(req, res) {
    res.json(armors);
}

// Artifacts
function getArtifacts(req, res) {
    res.json(artifacts);
}

// Cursed
function getCursedItems(req, res) {
    res.json(cursedItems);
}

// Magical Tattoos
function getMagicalTattoos(req, res) {
    res.json(magicalTattoos);
}

// Potions
function getPotions(req, res) {
    res.json(potions);
}

// Rings
function getRings(req, res) {
    res.json(rings);
}

// Rods
function getRods(req, res) {
    res.json(rods);
}

// Shadow Piercing
function getShadowPiercings(req, res) {
    res.json(shadowPiercings);
}

// Staves and Icicle Wand
function getStaves(req, res) {
    res.json(staves);
}

// Weapons
function getWeapons(req, res) {
    res.json(weapons);
}

// Wondrous Items
function getWondrousItems(req, res) {
    res.json(wondrousItems);
}


module.exports = {
    getAllMagicItems,
    getAmmunitions,
    getArmors,
    getArtifacts,
    getCursedItems,
    getMagicalTattoos,
    getPotions,
    getRings,
    getRods,
    getShadowPiercings,
    getStaves,
    getWeapons,
    getWondrousItems
}