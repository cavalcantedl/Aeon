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
            const clientesObj = {
                    nomeFantasia: req.body.nomeFantasia,
                    razaoSocial: req.body.razaoSocial,
                    cnpj: req.body.cnpj,
                    telefoneCelular: req.body.celular,
                    telefoneFixo: req.body.telefoneFixo,
                    dataEntrada: req.body.dataEntrada,
                    dataSaida: req.body.dataSaida,
                    logotipoCliente: req.body.logotipoCliente,
                    nomeResponsavel: req.body.nomeResponsavel,
                    endereco : {
                        logradouro: req.body.logradouro,
                        numero: req.body.numero,
                        complemento: req.body.complemento,
                        bairro: req.body.bairro,
                        cidade: req.body.cidade,
                        estado: req.body.estado,
                        pais: req.body.pais,
                        cep: req.body.cep,
                    }
            }
            const resultado = await Cliente.create (clientesObj, 
                { include : ['enderecoObj']
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