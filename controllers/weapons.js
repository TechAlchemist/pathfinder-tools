const allWeaponData = require('../resources/json/all_weapons_lists.json');

function getAllWeapons(req, res) {
    res.json(allWeaponData);
}

module.exports = {
    getAllWeapons
}