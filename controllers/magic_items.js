const allMagicItemsJSON = require('../resources/json/magic_items_full.json');

function getAllMagicItems(req, res) {
    res.json(allMagicItemsJSON);
}

module.exports = {
    getAllMagicItems
}