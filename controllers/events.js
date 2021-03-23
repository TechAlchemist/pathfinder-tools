const Event = require('../models/event');

function getAllEvents(req, res) {
    Event.find({}, function(error, events) {
        return res.json(events);
    });
}

function getSpecificEvent(req, res) {
    let id = req.params.id;
    Event.findById(id, function(error, event) {
        return res.json(event);
    });
}

function deleteEvent(req, res) {
    let id = req.params.id;

    Event.findByIdAndDelete(id, function(error, docs) {
        if (error) {
            res.status(500).json({"MSG": "Failed to delete asset."});
        }
        else {
            res.status(200).json({"MSG": "Asset deleted."});
        }
    });
}

function updateEvent(req, res) {
    let id = req.params.id;
    if (!req.body) {
        return res.status(400).json({"MSG": "Request body was empty. "});
    } 
    else {
        Event.findByIdAndUpdate(id, req.body, function(error, data) {
            return res.status(200).json({"MSG": "Asset updated."});
        });
    }
}

function createEvent(req, res) {
    const event = new Event(req.body);
    try {
        event.save();
    }
    catch(error) {
        return res.status(500).json({"MSG": "Failed to create asset. "})
    }
    finally {
        return res.status(200).json({"MSG": "Asset created."})
    }
}

module.exports = {
    getAllEvents,
    getSpecificEvent,
    deleteEvent,
    updateEvent,
    createEvent
}

