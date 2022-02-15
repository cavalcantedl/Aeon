const db  = require("../models");
const { validationResult } = require("express-validator");



let clientesController = {
    clientes: async (req, res, next) => {
        const clienteObj = await db.Cliente.findAll();

        return res.render("sistema/clientes", {
            titulo: "Sistema de Gestão para Agências de Marketing",
            separador: "|",
            marca: "Aeon",
            descricao: "Gestão descoplicada para agências de marketing.",
            favicon: "../images/aeon-logo.png",
            logoImagem: "../images/aeon-logo.png",
            dadosUsuario: req.session.aeonAdminUser,
            clienteObj,
        })
    },
    cadastrarClientes: (req, res, next) => {
        return res.render("sistema/cadastrarClientes", {
            formAction: `/sistema/clientes/cadastrar`,
            buttonMessage: "Cadastrar",
            formConteudo: req.body,
            titulo: "Sistema de Gestão para Agências de Marketing",
            separador: "|",
            marca: "Aeon",
            descricao: "Gestão descoplicada para agências de marketing.",
            favicon: "../images/aeon-logo.png",
            logoImagem: "../images/aeon-logo.png",
            dadosUsuario: req.session.aeonAdminUser,
        })
    },
    acaoCadastrarClientes: async (req, res, next) => {        
        let alertaErros = validationResult(req);
        if (alertaErros.isEmpty()){
            const { nomeFantasia, razaoSocial, logradouro, cidade, numero, complemento, bairro, uf, pais, cep, cnpj, telefoneCelular, telefoneFixo, dataEntrada, dataSaida, nomeResponsavel } = req.body;
            
            let logotipoCliente = null;
            if (req.file !== undefined) {
                logotipoCliente = req.file.filename;
            } else {
                logotipoCliente = "logotipoCliente.png";
            }

            const clienteObj = {
                nomeFantasia: nomeFantasia,
                razaoSocial: razaoSocial,
                endereco: 
                    {
                        logradouro: logradouro,
                        numero: numero,
                        complemento: complemento,
                        bairro: bairro,
                        cidade: cidade,
                        estado: uf,
                        pais: pais,
                        cep: cep
                    },
                cnpj: cnpj,
                telefoneCelular: telefoneCelular,
                telefoneFixo: telefoneFixo,
                dataEntrada: dataEntrada,
                dataSaida: dataSaida,
                logotipoCliente: logotipoCliente,
                nomeResponsavel: nomeResponsavel,
            };

            await db.Cliente.create(clienteObj, { include: ["endereco"]});
            res.redirect("/sistema/clientes");

        }
        else {
            return res.render("sistema/cadastrarClientes", {
                formAction: `sistema/clientes/cadastrar`,
                buttonMessage: "Cadastrar",
                titulo: "Sistema de Gestão para Agências de Marketing",
                separador: "|",
                marca: "Aeon",
                descricao: "Gestão descoplicada para agências de marketing.",
                favicon: "../images/aeon-logo.png",
                logoImagem: "../images/aeon-logo.png",
                alertaErros: alertaErros.mapped(),
                dadosUsuario: req.session.aeonAdminUser,
                formConteudo: req.body,
            })
        }
        
    },
    editarCliente: async (req, res, next) => {
        const cliente = await db.Cliente.findByPk(req.params.id, {include: ["endereco"]});
        return res.render("sistema/editarClientes", {
            formAction: `/sistema/clientes/editar/${req.params.id}?_method=PUT`,
            buttonMessage: "Atualizar",
            formConteudo: cliente,
            titulo: "Sistema de Gestão para Agências de Marketing",
            separador: "|",
            marca: "Aeon",
            descricao: "Gestão descoplicada para agências de marketing.",
            favicon: "../images/aeon-logo.png",
            logoImagem: "../images/aeon-logo.png",
            dadosUsuario: req.session.aeonAdminUser,
        });
    },
    acaoEditarCliente: async (req, res, next) =>{
        let alertaErros = validationResult(req);
        if (alertaErros.isEmpty()){
            const cliente = await db.Cliente.findByPk(req.params.id, {include: ["endereco"]});
            let { nomeFantasia, razaoSocial, logradouro, cidade, numero, complemento, bairro, uf, pais, cep, cnpj, telefoneCelular, telefoneFixo, dataEntrada, dataSaida, nomeResponsavel } = req.body;
            // console.log(req.body);

            if(dataSaida == ""){
                dataSaida = null;
            }
            
            // console.log(dataSaida + " DataSaida");

            const clienteObj = {
                nomeFantasia: nomeFantasia,
                razaoSocial: razaoSocial,                
                cnpj: cnpj,
                telefoneCelular: telefoneCelular,
                telefoneFixo: telefoneFixo,
                dataEntrada: dataEntrada,
                dataSaida: dataSaida,
                nomeResponsavel: nomeResponsavel,
            };

            const enderecoObj = {

                        logradouro: logradouro,
                        numero: numero,
                        complemento: complemento,
                        bairro: bairro,
                        cidade: cidade,
                        estado: uf,
                        pais: pais,
                        cep: cep,

            }

            await db.Cliente.update(clienteObj, { where: { id_cliente: req.params.id }})
            
            .then(async function() {
                await db.Endereco.update(enderecoObj, { where: { id_endereco: cliente.id_endereco }})
              })
            .catch(function(error){
                  console.log(error)
              })
        

            res.redirect("/sistema/clientes");

        }
        else {
            // console.log(alertaErros.mapped());
            // console.log(req.body);
            // console.log("Deu ruim!");
            // console.log(alertaErros);
            return res.render("sistema/editarClientes", {
                formAction: `/sistema/clientes/editar/${req.params.id}?_method=PUT`,
                buttonMessage: "Cadastrar",
                titulo: "Sistema de Gestão para Agências de Marketing",
                separador: "|",
                marca: "Aeon",
                descricao: "Gestão descoplicada para agências de marketing.",
                favicon: "../images/aeon-logo.png",
                logoImagem: "../images/aeon-logo.png",
                alertaErros: alertaErros.mapped(),
                dadosUsuario: req.session.aeonAdminUser,
                formConteudo: req.body,
            })
        }
    },

    excluir: async (req, res) => {
        const cliente = await db.Cliente.findByPk(req.params.id, {include: ["endereco"]});
        await db.Cliente.destroy({ where: { id_cliente: req.params.id } })

        .then(async function() {
            await db.Endereco.destroy( { where: { id_endereco: cliente.id_endereco }})
          })
        .catch(function(error){
              console.log(error)
          })

        res.redirect("/sistema/clientes");
    },
};

module.exports = clientesController 