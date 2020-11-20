//routes.js
//Initialise le router express
let router = require('express').Router();
//Réponse par défaut de l'API
router.get('/', function(req, res) {
    res.json({
        status: 'API fonctionne',
        message: 'Bienvenue sur API'
    });
});
//Import de userController
var userController = require('./userController');
// Routes utilisateur
router.route('/user')
    .get(userController.index)
    .post(userController.view)
router.route('/user/inscription')
    .post(userController.add);
router.route('/user/:user_id')
    .get(userController.view)
    .put(userController.update)
    .delete(userController.delete);
router.route('/user/vue')
    .post(userController.userId)

//Import de themeController
var themeController = require('./themeController');
// Routes themes
router.route('/theme')
    .get(themeController.index)
    .post(themeController.add);
router.route('/theme/:theme_id')
    .get(themeController.view)
    .put(themeController.update)
    .delete(themeController.delete);

//Import de pointsIController
var pointController = require('./pointsIController');
// Routes points d'intérêts
router.route('/point')
    .get(pointController.index)
    .post(pointController.add);
router.route('/point/:point_id')
    .get(pointController.view)
    .put(pointController.update)
    .delete(pointController.delete);

//Export API routes
module.exports = router;