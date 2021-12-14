const db  = require("../models");
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
    acaoCadastrarClientes: async (req, res, next) => {        
        let alertaErros = validationResult(req);
        
        if (alertaErros.isEmpty()){
            console.log(req.body);
            const { nomeFantasia, razaoSocial, endereco, cidade, numero, complemento, bairro, estado, pais, cep, cnpj, celular, telefoneFixo, dataEntrada, dataSaida, nomeResponsavel } = req.body;
            const logotipoCliente = req.file.path;
            const clienteObj = {
                nomeFantasia: nomeFantasia,
                razaoSocial: razaoSocial,
                enderecoObj: 
                    {
                        logradouro: endereco,
                        numero: numero,
                        complemento: complemento,
                        bairro: bairro,
                        cidade: cidade,
                        estado: estado,
                        pais: pais,
                        cep: cep
                    },
                cnpj: cnpj,
                telefoneCelular: celular,
                telefoneFixo: telefoneFixo,
                dataEntrada: dataEntrada,
                dataSaida: dataSaida,
                logotipoCliente: logotipoCliente,
                nomeResponsavel: nomeResponsavel,
            };

            await db.Cliente.create(clienteObj, { include: ["enderecoObj"]});

            console.log(clienteObj);

            res.redirect("cadastrar");
            console.log(req.body);
            console.log(req.file);
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