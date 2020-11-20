//themeController.js

//Import de theme Model
Theme = require('./themeModel');

//Pour l'index
exports.index = function (req, res) {
    Theme.get(function (err, theme) {
        if (err)
            res.json({
                status: "erreur",
                message: err
            });
        res.json({
            status: "succès",
            message: "Theme bien reçu",
            data: theme       
        });
    });
};

//Pour ajouter un theme
exports.add = function (req, res) {
    var theme = new Theme();
    theme.nom = req.body.nom;
//On sauvegarde le nouveau theme
    theme.save(function (err) {
        if (err) {
            return res.json(err);
        } else {
            return res.json({
                message: 'thème ajouté avec succès',
                data: theme
            });
        }
    });
};
// Vue sur un theme
exports.view = function (req, res) {
    Theme.findById(req.params.theme_id, function (err, theme) {
        if (err)
            res.send(err);
        res.json({
            message: 'Détails sur un theme',
            data: theme
        });
    });
};
// Update theme
exports.update = function (req, res) {
    Theme.findById(req.params.theme_id, function (err, theme) {
        if (err)
            res.send(err);
        theme.nom = req.body.nom ? req.body.nom : theme.nom;
//on sauvegarde 
        theme.save(function (err) {
            if (err)
                res.json(err)
            res.json({
                message: "Theme mis à jour avec succès",
                data: theme
            });
        });
    });
};
// Suppression d'un theme
exports.delete = function (req, res) {
    Theme.deleteOne({
        _id: req.params.theme_id
    }, function (err) {
        if (err)
            res.send(err)
        res.json({
            status: "succès",
            message: 'Thème supprimé'
        })
    })
}