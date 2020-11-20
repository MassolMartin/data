/*'use strict';

module.exports = function(app) {
    let fs = require('fs')
    let path = require('path')
    let multer = require('multer')

    let storage = multer.diskStorage({
        destination: function(req, file, cb) {
            let uploadsDir = path.join(__dirname, 'public', 'uploads', '${Date.now()}')
            fs.mkdirSync(uploadsDir)
            cb(null, uploadsDir)
        },
        filename: function(req, file, cb) {
            cb(null, file.originalname)
        }
    })

    let upload = multer({ storage })
    let controller = require('./imgController')
    router.route('/images')
        .get(controller.index)
        .post(upload.single("data"). controller.create)
    router.route('/images/:id')
        .get(controller.show)
        .put(controller.update)
        .delete(controller.destroy)
}*/