const clientModel = require('../models/clientModel');

let aeonController = {
    index: (req, res, next) => {
        res.render('index', { 
            title: 'Aeon - Gestão Descomplicada para Agência de Marketing' 
        }); /* Indica o caminho da homepage da do site */ 
    },
    visaoGeral: (req, res, next) => {
        res.render('sistema/visaogeral', { 
            title: 'Aeon - Gestão Descomplicada para Agência de Marketing' 
        }); /* Indica o caminho da homepage da aplicação */ 
    },
    viewCliente: (req, res, next) => {
        res.render('sistema/cadastrocliente', {
            title: 'Aeon - Cadastrar Cliente'
        }); /* Indica o caminho da página de cadastro de novo cliente*/ 
    },
    cadastroUsuario: (req, res, next) =>{
        res.render('sistema/cadastrocliente', {
            title: 'Aeon - Cadastrar Usuário'
        });
    },
    acessoRestrito: (req, res, next) => {
        res.render("sistema/acessorestrito", {
          title: "Aeon - Este acesso é restrito.",
          logoImage: "../images/aeon-logo.png",
        });
      },
};
module.exports = aeonController;