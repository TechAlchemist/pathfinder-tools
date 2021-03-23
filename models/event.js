const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: String,
    location: String,
    date: String,
    description: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Event', eventSchema);