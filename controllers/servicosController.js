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
                nome_servico: nomeServico,
                tipo_servico: tipoServico,
                valor_servico: valorServico,
                descricao_servico: descricaoServico
            }
            await db.Servico.create(servicoObj);
            res.redirect("/sistema/servicos");

        }
        else {
            console.log(alertaErros.mapped());
            console.log(req.body);
            console.log("Deu ruim!");
            console.log(alertaErros);
            return res.render("sistema/cadastrarServico", {
                formAction: `/sistema/servicos/cadastrar`,
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