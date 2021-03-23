const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
    name: String,
    country: String,
    controlledBy: String,
    plane: String

}, {
    timestamps: true
});

module.exports = mongoose.model('Place', placeSchema);