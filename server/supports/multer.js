const multer = require('multer')


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/profile-images')
    },
    filename: function (req, file, cb) {

        cb(null, 'PIMG-' + Date.now() + Math.random() * 1000 + '.' + file.mimetype.split('/')[1])
    }
})
var filefilter = (req, file, next) => {
    try {
        if (file.mimetype.includes('image') === false) throw 'File Must Be An Image'
        next(null, true)
    } catch (error) {
        req.bebas = error
        next(null, false)
    }
}


const upload = multer({ storage: storage, filefilter: filefilter, limits: { fieldSize: 200000000 } }).single("image_1")

module.exports = upload