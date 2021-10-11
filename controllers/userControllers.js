const usersAeon = require("../models/usersAeon");
const bcrypt = require("bcrypt");

const { validationResult } = require("express-validator");

let userController = {
  gestaoUsuarios: (req, res, next) => {
    res.render("sistema/gestaousuarios", {
      usuarios: usersAeon,
      title: "Aeon - Gestão de Usuários",
    }); /* Indica o caminho da gestão de usuários */
  },

  cadastrarUsuario: (req, res, next) => {
    const nomeUsuario = req.body.nome;
    const sobrenomeUsuario = req.body.sobrenome;
    const empresaUsuario = req.body.empresa;
    const emailUsuario = req.body.email;
    const encryptPassword = bcrypt.hashSync(req.body.password, 12);

    usersAeon.push({
      id: usersAeon.length + 1,
      nome: nomeUsuario,
      sobrenome: sobrenomeUsuario,
      empresa: empresaUsuario,
      email: emailUsuario,
      password: encryptPassword,      
    });

    next(res.redirect("/login"));
  },
};

module.exports = userController;
