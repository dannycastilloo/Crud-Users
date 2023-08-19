var mongoose = require('mongoose');

var AreaScheme = mongoose.Schema({
    Name: String,
    Abbreviation: String,
    State: String
});

module.exports = mongoose.model('Area',AreaScheme,'Areas')