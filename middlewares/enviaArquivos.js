const multer = require("multer"); 
const path = require("path");

const enviaImagens = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/uploads/images");
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname+"-"+Date.now()+"-"+path.extname(file.originalname));
    }
})
const uploadImagem = multer({ storage:enviaImagens });


module.exports = {
    uploadImagem
}

