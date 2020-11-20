let express = require('express')
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let path = require('path')
let app = express();

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
})

//Import des routes
let apiRoutes = require("./routes");
const { pathToFileURL } = require('url');

// Config du bodyparser pour les posts requetes
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

//app.use(express.static(path.join(__dirname, '/public')))

/*const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads');
    },

    // By default, multer removes file extensions so let's add them back
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

var upload = multer({storage : storage})
app.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
    const file = req.file
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    }
      res.send(file)
    
  })*/
  
//Connection à mongoose
const dbPath = 'mongodb://localhost/db';
const options = {useNewUrlParser: true, useUnifiedTopology: true}
const mongo = mongoose.connect(dbPath, options);

mongo.then(() => {
    console.log('Connecté');
}, error => {
    console.log(error, 'erreur');
});
var db=mongoose.connection;

//On vérifie la connection
if (!db)
    console.log("Erreur de connection à db");
else
    console.log("Connection à db réussie");

// Port serveur
var port = process.env.PORT || 8080;

// Message d'accueil
app.get('/', (req, res) => res.send('Bienvenue sur Express'));

//Pour utiliser les routes dans api
app.use('/api', apiRoutes)

// lancement de l'application sur le port spécifié
app.listen(port, function() {
    console.log("Lancement de bd sur le port "+ port);
});
