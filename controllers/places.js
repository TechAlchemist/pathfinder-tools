const Place = require('../models/place');

function createPlace(req, res) {
    const place = new Place(req.body);
    try {
        place.save();
    }
    catch(error) {
        return res.status(400).json(error);
    }
    finally {
        return res.status(200).json({"MSG": "Asset created. "});
    }  
}

function getAllPlaces(req, res) {
    Place.find({}, function(error, places) {
        return res.json(places);
    });
}

function getSpecificPlace(req, res) {
    let id = req.params.id;
    Place.findById(id, function(error, place) {
        return res.json(place);
    });
}

function updatePlace(req, res) {
    let id = req.params.id;
    if (!req.body) {
        return res.status(400).json({"MSG": "Request body was empty. "});
    } 
    else {
        Place.findByIdAndUpdate(id, req.body, function(error, data) {
            return res.status(200).json({"MSG": "Asset updated."});
        });
    }
}

function deletePlace(req, res) {
    let id = req.params.id;

    Place.findByIdAndDelete(id, function(error, docs) {
        if (error) {
            res.status(500).json({"MSG": "Failed to delete asset."});
        }
        else {
            res.status(200).json({"MSG": "Asset deleted."});
        }
    });
}

module.exports = {
    createPlace,
    getAllPlaces,
    getSpecificPlace,
    updatePlace,
    deletePlace
}