//pointsController.js

//Import de points I Model
Point = require('./pointsIModel');

//Pour l'index
exports.index = function (req, res) {
    Point.get(function (err, point) {
        if (err)
            res.json({
                status: "erreur",
                message: err
            });
        res.json({
            status: "succès",
            message: "Point d'intérêt bien reçu",
            data: point       
        });
    });
};

//Pour ajouter un point d'intérêt
exports.add = function (req, res) {
    var point = new Point();
    point.nom = req.body.nom;
    point.description = req.body.description;
    point.url = req.body.url;
    point.themes = req.body.themes;
//On sauvegarde le nouveau point
    point.save(function (err) {
        if (err)
            res.json({
                message: "erreur"
            });
        res.json({
            message: "Nouveau point d'intérêt ajouté avec succès",
            data: point
        });
    });
};

// Vue sur un point 
exports.view = function (req, res) {
    Point.findById(req.params.point_id, function (err, point) {
        if (err)
            res.send(err);
        res.json({
            message: 'Détails sur un point',
            data: point
        });
    });
};

// rechercher un point par nom
exports.view = function (req, res) {
    var point = req.body.nom;

    Point.findOne({nom: nom}, function(err, point) {
        if(err) {
            return res.json({
                message: "erreur",
                data: point
            });
        }
        if(!point) {
            return res.json({
                message: "erreur point inconnu",
                data: point
            });
        }
        return res.json({
            data: point
        });
    })
};

// Update user
exports.update = function (req, res) {
    Point.findById(req.params.point_id, function (err, point) {
        if (err)
            res.send(err);
        point.nom = req.body.nom;
        point.description = req.body.description;
        point.url = req.body.url;
        point.themes = req.body.themes;
        //on sauvegarde 
        point.save(function (err) {
            if (err)
                res.json(err)
            res.json({
                message: "Point mis à jour avec succès",
                data: point
            });
        });
    });
};

// Suppression d'un user
exports.delete = function (req, res) {
    Point.deleteOne({
        _id: req.params.point_id
    }, function (err) {
        if (err)
            res.send(err)
        res.json({
            status: "succès",
            message: 'Point supprimé'
        })
    })
}