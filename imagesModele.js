/*var mongoose = require('mongoose')

var ImageSchema = new Schema({
    idUser: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    }
})

// On exporte le modele utilisateur
//module.exports = mongoose.model('Image', ImageSchema)

// On exporte le modele du theme
var Theme = module.exports = mongoose.model('image', ImageSchema);
module.exports.get = function (callback, limit) {
    Theme.find(callback).limit(limit); 
}*/