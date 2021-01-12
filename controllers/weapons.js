const allWeaponData = require('../resources/all_weapons_lists.json');

function getAllWeapons(req, res) {
    res.json(allWeaponData);
}

module.exports = {
    getAllWeapons
}