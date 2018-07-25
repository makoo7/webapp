const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  stadardSchema = new Schema({
    class:String,
    classteacher:String
});

module.exports = mongoose.model('Standard',stadardSchema);