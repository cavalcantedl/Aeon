const listaClientes = require('../models/listaclientes');

let aeonController = {
    index: (req, res, next) => {
        res.render('index', { 
            title: 'Aeon - Gestão Descomplicada para Agência de Marketing' 
        }); /* Indica o caminho da homepage da aplicação */ 
    },

    home: (req, res, next) => {
        res.render('sistema/home', { 
            title: 'Aeon - Gestão Descomplicada para Agência de Marketing' 
        }); /* Indica o caminho da homepage da aplicação */ 
    },
    gestaoClientes: (req, res, next) => {
        res.render('sistema/gestaoclientes', {
            clientes: listaClientes,
            title: 'Aeon - Gestão de Clientes',
        }); /* Indica o caminho da gestão de clientes */ 
    },
    viewCliente: (req, res, next) => {
        res.render('sistema/cadastrocliente', {
            title: 'Aeon - Cadastrar Cliente'
        }); /* Indica o caminho da página de cadastro de novo cliente*/ 
    },
    cadastroUsuario: (req, res, next) => {
        res.render('sistema/cadastrousuario', {
            title: 'Aeon - Cadastrar Usuário'
        }); /* Indica o caminho da página de cadastro de usuário*/ 
    },
    cadastroCliente: (req, res, next)=>{
         const idCliente = req.body.id;
         const empresaCliente = req.body.empresa;
         const criadaCliente = req.body.criada;

          listaClientes.push({
              id: idCliente,
              empresa: empresaCliente,
              criada: criadaCliente
          })
          res.redirect('gestaoclientes')
    }
};
module.exports = aeonController;