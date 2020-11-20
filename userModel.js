//userModel.js
var mongoose = require('mongoose');

//schema
var userSchema = mongoose.Schema({
    identifiants: {
        idUser: {
            type: String,
            required: true,
            unique: true
        },
        mdp: {
            type: String,
        }
    },
    nom: {
        type: String,
    },
    prenom: {
        type: String,
    },
    email: {
        type: String,
    },
    theme: {
        type: [String]
    }
});
// On exporte le modele utilisateur
var User = module.exports = mongoose.model('user', userSchema);

module.exports.get = function (callback, limit) {
    User.find(callback).limit(limit); 
}