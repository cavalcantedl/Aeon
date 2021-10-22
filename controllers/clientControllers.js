const clientModel = require('../models/clientModel');

const clientController = {
    cadastroCliente: (req, res, next) => {
        res.render('sistema/clientes/cadastrocliente', {
            title: 'Aeon - Cadastrar Cliente',
        }); // Indica o caminho da página de cadastro de novo cliente// 
    },
    gestaoClientes: (req, res, next) => {
        res.render('sistema/clientes/gestaoclientes', {
            clientes: clientModel.listaClientes,
            title: 'Aeon - Gestão de Clientes',
        }); // Indica o caminho da gestão de clientes // 
    },
    novoCliente: (req, res, next)=>{
        const idCliente = req.body.id;
        const empresaCliente = req.body.empresa;
        const criadaCliente = req.body.criada;

         clientModel.listaClientes.push({
             id: idCliente,
             empresa: empresaCliente,
             criada: criadaCliente
         })
         res.redirect('/sistema'); //Indica o caminho de cadastro de clientes // 
   },
   attClienteView: (req,res, next)=>{
       const {id} = req.params;
        let resultado = clientModel.buscarClienteID(id);
        res.render('sistema/clientes/attcliente', {
            title: 'Aeon - Gestão de Clientes',
            id: id,
            cliente: resultado

        }); 
   },
};
module.exports = clientController; 