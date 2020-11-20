//userController.js

//Import de user Model
User = require('./userModel');

//Pour l'index
exports.index = function (req, res) {
    User.get(function (err, user) {
        if (err)
            res.json({
                status: "erreur",
                message: err
            });
        res.json({
            status: "succès",
            message: "Utilisateur bien reçu",
            data: user       
        });
    });
};

//Pour ajouter un utilisateur
exports.add = function (req, res) {
    var user = new User();
    user.identifiants.idUser = req.body.idUser? req.body.idUser: user.identifiants.idUser;
    user.identifiants.mdp = req.body.mdp;
    user.nom = req.body.nom;
    user.prenom = req.body.prenom;
    user.email = req.body.email;
    user.theme = req.body.theme;
//On sauvegarde le nouvel utilisateur
    user.save(function (err) {
        if (err)
            res.json({
                message: "erreur"
            });
        res.json({
            message: "Nouvel utilisateur ajouté avec succès",
            data: user
        });
    });
};
// Vue sur un utilisateur
/*exports.view = function (req, res) {
    User.findOne({idUser: req.params.idUser}, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            message: 'Détails sur un utilisateur',
            data: user
        });
    });
};*/
// recherche utilisateur par mdp et idUser
exports.view = function (req, res) {
    var idUser = req.body.idUser;
    var mdp = req.body.mdp;

    User.findOne({'identifiants.idUser': idUser, "identifiants.mdp": mdp}, function(err, user) {
        if(err) {
            return res.json({
                message: "erreur",
                data: user
            });
        }
        if(!user) {
            return res.json({
                message: "erreur user inconnu",
                data: user
            });
        }
        return res.json({
            message: "Ok c bon",
            data: user
        });
    })
};

// recherche utilisateur par idUser
exports.userId = function (req, res) {
    var idUser = req.body.idUser;

    User.findOne({'identifiants.idUser': idUser}, function(err, user) {
        if(err) {
            return res.json({
                message: "erreur",
                data: user
            });
        }
        if(!user) {
            return res.json({
                message: "erreur user inconnu",
                data: user
            });
        }
        return res.json({
            message: "Ok c bon",
            data: user
        });
    })
};

// Update user
exports.update = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err)
            res.send(err);
        user.identifiants.idUser = req.body.idUser? req.body.idUser: user.identifiants.idUser;
        user.identifiants.mdp = req.body.mdp;
        user.nom = req.body.nom;
        user.prenom = req.body.prenom;
        user.email = req.body.email;
        user.theme = req.body.theme;
//on sauvegarde 
        user.save(function (err) {
            if (err)
                res.json(err)
            res.json({
                message: "Utilisateur mis à jour avec succès",
                data: user
            });
        });
    });
};
// Suppression d'un user
exports.delete = function (req, res) {
    User.deleteOne({
        _id: req.params.user_id
    }, function (err) {
        if (err)
            res.send(err)
        res.json({
            status: "succès",
            message: 'Utilisateur supprimé'
        })
    })
}