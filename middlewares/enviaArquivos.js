const multer = require("multer"); 
const path = require("path");

const enviaArquivos = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/uploads/images");
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname+"-"+Date.now()+"-"+path.extname(file.originalname));
    }
})
const uploadArquivo = multer({ storage:enviaArquivos });


module.exports = {
    uploadArquivo
}

