const db  = require("../models");
const { validationResult } = require("express-validator");
const moment = require("moment");

let servicosController = {
    servicos: (req, res, next) => {
        return res.render("sistema/servicos", {
            titulo: "Sistema de Gestão para Agências de Marketing",
            separador: "|",
            marca: "Aeon",
            descricao: "Gestão descoplicada para agências de marketing.",
            favicon: "../images/aeon-logo.png",
            logoImagem: "../images/aeon-logo.png",
        })
    },
    cadastrarServico: (req, res, next) => {
        return res.render("sistema/cadastrarServico", {
            formAction: `/sistema/servicos/cadastrar`,
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
    acaoCadastrarServicos: async (req, res, next) => {        
        let alertaErros = validationResult(req);
        if (alertaErros.isEmpty()){
            const { nomeServico, tipoServico, valorServico, descricaoServico } = req.body;

            const servicoObj = {
                nomeServico: nomeServico,
                tipoServico: tipoServico,
                valorServico: valorServico,
                descricaoServico: descricaoServico
            }

            await db.Servico.create(servicoObj);
            res.redirect("/sistema/servicos");

        }
        else {
            return res.render("sistema/cadastrarServico", {
                formAction: `sistema/servicos/cadastrar`,
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
        
    }
        
}

module.exports = servicosController;