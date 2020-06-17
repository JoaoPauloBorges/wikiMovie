const express = require('express');
const multer = require('multer');
const path = require('path');

const newLocal = './src/public/img';
const storage = multer.diskStorage({
    destination: newLocal,
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
})
const upload = multer({ storage, limits: {fileSize: 1000000} }).single('file');

const router = express.Router();

router.post('/', async (req, resp) => {
    upload(req, resp, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(req.file);
            resp.send({id: 0, filename: req.file.filename});
        }
    })
});

module.exports = router;