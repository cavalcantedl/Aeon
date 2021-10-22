const usersAeon = require("../models/usersAeon");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");

let perfilController = {
  perfilUsuario: (req, res, next) => {
       res.render("sistema/meuperfil/perfil", {
      title: "Aeon - Meu perfil",
    });
  },
};  

module.exports = perfilController;
