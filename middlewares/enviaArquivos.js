const multer = require ("multer");
const path = require ("path");

const enviaArquivos = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
});

const uploadArquivos = multer({ storage:enviaArquivos });

module.exports = {
    uploadArquivos
}
