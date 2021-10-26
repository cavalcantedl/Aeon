const usersAeon = require("../models/usersAeon");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const enviaArquivos = require("../middlewares/enviaArquivos");

let perfilController = {
  perfilUsuario: (req, res, next) => {
      // console.log(req.body);
      // console.log(req.file.path);
      res.render("sistema/meuperfil/perfil", {
      title: "Aeon - Meu perfil",
    });
  },
};  

module.exports = perfilController;
