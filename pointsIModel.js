//pointsIModel.js
var mongoose = require('mongoose');

//schema
var pointSchema = mongoose.Schema({
    nom: {
        type: String
    },
    description: {
        type: String
    },
    url: {
        type: String
    },
    themes: {
        type: [String]
    }
});
// On exporte le modele utilisateur
var Point = module.exports = mongoose.model('point', pointSchema);

module.exports.get = function (callback, limit) {
    Point.find(callback).limit(limit); 
}