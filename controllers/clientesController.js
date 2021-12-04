const { Cliente } = require("../models");
const { validationResult } = require("express-validator");

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
            titulo: "Sistema de Gestão para Agências de Marketing",
            separador: "|",
            marca: "Aeon",
            descricao: "Gestão descoplicada para agências de marketing.",
            favicon: "../images/aeon-logo.png",
            logoImagem: "../images/aeon-logo.png",
        })
    },
    acaoCadastrarClientes: async (req, res, next) =>{        
        let alertaErros = validationResult(req);
        
        if (alertaErros.isEmpty()){
            console.log(req.body);
            const { nomeFantasia, razaoSocial, endereco, cidade, estado, pais, cep, cnpj, celular, telefoneFixo, dataEntrada, dataSaida, logotipoCliente, nomeResponsavel } = req.body;
            const resultado = await Cliente.create ({
                nomeFantasia: nomeFantasia,
                razaoSocial: razaoSocial,
                logradouro: endereco,
                cidade: cidade,
                estado: estado,
                pais: pais,
                cep: cep,
                cnpj: cnpj,
                telefoneCelular: celular,
                telefoneFixo: telefoneFixo,
                dataEntrada: dataEntrada,
                dataSaida: dataSaida,
                logotipoCliente: logotipoCliente,
                nomeResponsavel: nomeResponsavel,
            });

            console.log(resultado);

            res.redirect("cadastrar");
            console.log(req.body)
            console.log("Deu bom!");
            console.log(alertaErros);
        }
        else {
            return res.render("sistema/cadastrarClientes", {
                titulo: "Sistema de Gestão para Agências de Marketing",
                separador: "|",
                marca: "Aeon",
                descricao: "Gestão descoplicada para agências de marketing.",
                favicon: "../images/aeon-logo.png",
                logoImagem: "../images/aeon-logo.png",
                alertaErros: alertaErros.mapped(),
                formConteudo: req.body,
            })
            console.log(alertaErros.mapped());
            console.log(req.body);
            console.log("Deu ruim!");
            console.log(alertaErros);
        }
    },
};

module.exports = clientesController