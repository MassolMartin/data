//themeModel.js
var mongoose = require('mongoose');
//schema
var themeSchema = mongoose.Schema({
    nom: {
        type: String,
        required: true
    }
});
// On exporte le modele du theme
var Theme = module.exports = mongoose.model('theme', themeSchema);
module.exports.get = function (callback, limit) {
    Theme.find(callback).limit(limit); 
}