const db  = require("../models");
const { validationResult } = require("express-validator");
const moment = require("moment");


let clientesController = {
    clientes: (req, res, next) => {
        return res.render("sistema/clientes", {
            titulo: "Sistema de Gestão para Agências de Marketing",
            separador: "|",
            marca: "Aeon",
            descricao: "Gestão descoplicada para agências de marketing.",
            favicon: "../images/aeon-logo.png",
            logoImagem: "../images/aeon-logo.png",
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
        })
    },
    acaoCadastrarClientes: async (req, res, next) => {        
        let alertaErros = validationResult(req);
        if (alertaErros.isEmpty()){
            const { nomeFantasia, razaoSocial, logradouro, cidade, numero, complemento, bairro, estado, pais, cep, cnpj, telefoneCelular, telefoneFixo, dataEntrada, dataSaida, nomeResponsavel } = req.body;
            let logotipoCliente = null;
            if (req.file !== undefined) {
                logotipoCliente = req.file.path;
                console.log(req.file);
            }
            console.log(dataEntrada);
            console.log(dataSaida);
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
                        estado: estado,
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

            console.log(clienteObj);

            res.redirect("cadastrar");
            console.log(req.body);
            console.log(req.file);
            console.log("Sucessoo!");
            console.log(alertaErros);
        }
        else {
            console.log(alertaErros.mapped());
            console.log(req.body);
            console.log("Deu ruim!");
            console.log(alertaErros);
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
        });
    },
    acaoEditarCliente: async (req, res, next) =>{
        const cliente = await db.Cliente.findByPk(req.params.id, {include: ["endereco"]});
        const { nomeFantasia, razaoSocial, logradouro, cidade, numero, complemento, bairro, estado, pais, cep, cnpj, telefoneCelular, telefoneFixo, dataEntrada, dataSaida, nomeResponsavel } = req.body;
        let logotipoCliente = null;
        if (req.file !== undefined) {
            logotipoCliente = req.file.path;
            console.log(req.file);
        }
        console.log(logotipoCliente + " " + "aquiiiiiiiiiiiiiiiiiiiiiiiiii");
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
                    estado: estado,
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
        console.log(req.body);
        console.log(clienteObj);
        await db.Cliente.update(clienteObj, { where: { id_cliente: req.params.id }})
        
        .then((clienteObj) => {
            return clienteObj;
          })
        .catch((error) => {
            console.log(error);
            return;
        });
    }
    console.log("Sucessoo!");
};

module.exports = clientesController 