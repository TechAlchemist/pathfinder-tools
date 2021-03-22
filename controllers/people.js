const Person = require('../models/people');

function createPerson(req, res) {
    const person = new Person(req.body);
    try {
        person.save();
        return res.status(200).json({"MSG": "Asset created. "});
    }
    catch(error) {
        console.log(JSON.stringify(error))
        return res.status(400).json(error);
    }   
}

function getAllPeople(req, res) {
    Person.find({}, function(error, people) {
        return res.json(people);
    });
}

function getSpecificPerson(req, res) {
    let id = req.params.id;
    Person.findById(id, function(error, person) {
        return res.json(person);
    })
}

function updatePerson(req, res) {
    let id = req.params.id;
    if (!req.body) {
        return res.status(400).json({"MSG": "Request body was empty. "});
    } 
    else {
        Person.findByIdAndUpdate(id, req.body, function(error, data) {
            return res.status(200).json({"MSG": "Asset updated."});
        });
    }
}

function deletePerson(req, res) {
    let id = req.params.id;

    Person.findByIdAndDelete(id, function(error, docs) {
        if (error) {
            res.status(500).json({"MSG": "Failed to delete asset. "});
        }
        else {
            res.status(200).json({"MSG": "Asset deleted. "});
        }
    });
}

module.exports = {
    createPerson,
    getAllPeople,
    getSpecificPerson,
    updatePerson,
    deletePerson
}

