const loginModel = require("../models/usersAeon");
const { validationResult } = require("express-validator");

let loginController = {
  login: (req, res, next) => {
    res.render("sistema/login", {
      title: "Aeon - Login",
      logoImage: "../images/aeon-logo.png",
      created: false,
      erro: false,
      email: false,
    });
  },
  logar: (req, res, next) => {
    let erro = validationResult(req);
    if (erro.isEmpty()){
      let login = req.body;
      let resultado = loginModel.verificaLogin(login);
      console.log(resultado);
      if (resultado.login == true) {
        res.redirect("/sistema");
      } else if (resultado.erro) {
        res.render("sistema/login", {
          title: "Aeon - Login",
          logoImage: "../images/aeon-logo.png",
          created: false,
          erro: true,
          email: false,
        }); /* Indica o caminho da página de login */
      } else if (resultado.email == false){
        res.render("sistema/login", {
          title: "Aeon - Login",
          logoImage: "../images/aeon-logo.png",
          created: false,
          erro: false,
          email: true,
        }); 
      }
    }
  },
  signup: (req, res, next) => {
    res.render("sistema/signup", {
      title: "Aeon - Criar conta",
      logoImage: "../images/aeon-logo.png",
      exists: false,
      erros: {},
    }); /* Indica o caminho da página de criar conta */
  },
  senha: (req, res, next) => {
    res.render("sistema/senha", {
      title: "Aeon - Recuperar senha",
      logoImage: "../images/aeon-logo.png",
    });
  },
  emailSenha: (req, res, next) => {
    res.render("sistema/emailsenha", {
      title: "Aeon - E-mail de senha enviado com sucesso",
      logoImage: "../images/aeon-logo.png",
    });
  },
  acessoRestrito: (req, res, next) => {
    res.render("sistema/acessorestrito", {
      title: "Aeon - Este acesso é restrito.",
      logoImage: "../images/aeon-logo.png",
    });
  },
};

module.exports = loginController;
