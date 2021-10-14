const listaClientes = require('../models/listaclientes');

let clientController = {
    cadastroCliente: (req, res, next) => {
        res.render('sistema/cadastrocliente', {
            title: 'Aeon - Cadastrar Cliente',
        }); // Indica o caminho da página de cadastro de novo cliente// 
    },
    gestaoClientes: (req, res, next) => {
        res.render('sistema/gestaoclientes', {
            clientes: listaClientes,
            title: 'Aeon - Gestão de Clientes',
        }); // Indica o caminho da gestão de clientes // 
    },
    novoCliente: (req, res, next)=>{
        const idCliente = req.body.id;
        const empresaCliente = req.body.empresa;
        const criadaCliente = req.body.criada;

         listaClientes.push({
             id: idCliente,
             empresa: empresaCliente,
             criada: criadaCliente
         })
         res.redirect('sistema/gestaoclientes'); //Indica o caminho de cadastro de clientes // 
   },
   attClienteView: (req,res, next)=>{
        res.render('sistema/gestaoclientes/editar/:id', {
        title: 'Aeon - Gestão de Clientes',
    }); // Indica o caminho da edição de cadastro de clientes // 
   },
   attCliente: (req,res, next)=>{
        res.render('sistema/gestaoclientes/editar/:id', {
        title: 'Aeon - Gestão de Clientes',
    }); // Indica o caminho da edição de cadastro de clientes // 
    }
}
module.exports = clientController;