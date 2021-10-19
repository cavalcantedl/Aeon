const usersAeon = require("../models/usersAeon");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");

let userController = {
  gestaoUsuarios: (req, res, next) => {
    let listaUsuario = usersAeon.listaUsuarios();
    res.render("sistema/gestaousuarios", {
      usuarios: listaUsuario,
      title: "Aeon - Gestão de Usuários",
    }); /* Indica o caminho da gestão de usuários */
  },

  userProfile: (req, res, next) => {
       res.render("sistema/userprofile", {
      title: "Aeon - Edite seu perfil",
    });
     /* Indica o caminho da gestão de usuários */
  },

  cadastrarUsuario: (req, res) => {
    let erros = validationResult(req);

    if(erros.isEmpty()){
      let dadosUsuario = req.body;
      let resultado = usersAeon.cadastraUsuario(dadosUsuario);
      
      if (resultado.cadastrado) {
        res.render("sistema/login/login", {
          title: "Aeon - Login",
          logoImage: "../images/aeon-logo.png",
          created: true,
          email: false,
          erro: false,
        });
      } else {
        res.render("sistema/login/signup", {
          title: "Aeon - Criar conta",
          logoImage: "../images/aeon-logo.png",
          exists: true,
          erros: {},
        });
      }
    } else {
      res.render("sistema/login/signup", {
        title: "Aeon - Criar conta",
        logoImage: "../images/aeon-logo.png",
        exists: false,
        erros: erros.array(),
      });
    }
  },
};

module.exports = userController;
