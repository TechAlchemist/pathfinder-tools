const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = new Schema({
    name: String,
    race: String,
    class: String,
    level: Number,
    biography: String
}, {
    timestamps: true
});

module.exports = mongoose.model('People', personSchema);