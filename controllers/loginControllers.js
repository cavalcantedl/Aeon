let loginController = {
  login: (req, res, next) => {
    res.render("sistema/login", {
      title: "Aeon - Login",
      logoImage: "./images/aeon-logo.png",
    }); /* Indica o caminho da página de login */
  },
  signup: (req, res, next) => {
    res.render("sistema/signup", {
      title: "Aeon - Criar conta",
      logoImage: "./images/aeon-logo.png",
    }); /* Indica o caminho da página de criar conta */
  },
  senha: (req, res, next) => {
    res.render("sistema/senha", {
      title: "Aeon - Recuperar senha",
      logoImage: "./images/aeon-logo.png",
    }); /* Indica o caminho da página de recuperacao de senha*/
  },
  emailSenha: (req, res, next) => {
    res.render("sistema/emailsenha", {
      title: "Aeon - E-mail de senha enviado com sucesso",
      logoImage: "./images/aeon-logo.png",
    }); /* Indica o caminho da página de recuperacao de senha*/
  },
};

module.exports = loginController;
