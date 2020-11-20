/*'use strict';

var Image = require('imagesModele')

/*exports.index = function(req, res) {
    Image.find(function(err, image) {
        if(err) res.send(err)
        res.json(image)
    })
}

exports.show = function(req, res) {
    Image.find(id, function(err, image) {
        if(err) res.send(err)
        res.json(image)
    })
}*/

/*exports.create = function(req, res) {
    var path = require('path')
    var remove = path.join(__dirname, 'public')
    var relPath = req.file.path.replace(remove, '')
    var newImage = new Image(req.body)
    newImage.path = relPath
    newImage.save(function(err, image) {
        if(err) res.send(err)
        res.json(image)
    })
}*/

/*exports.update = function(req, res) {
    Image.findOneAndUpdate({_id : req.params.id}, function(err, image) {
        if(err) res.send(err)
        res.json(image)
    })
}

exports.destroy = function(req, res) {
    Image.deleteOne({_id: req.params.id}, function(err, image) {
        if(err) res.send(err)
        res.json({message : 'Image supprimée avec succès'})
    })
}*/