const db  = require("../models");
const { validationResult } = require("express-validator");
const moment = require("moment");

let servicosController = {
    

    servicos: async (req, res, next) => {
        const servicoObj = await db.Servico.findAll();
        console.log(req.session)
        return res.render("sistema/servicos", {
            titulo: "Sistema de Gestão para Agências de Marketing",
            separador: "|",
            marca: "Aeon",
            descricao: "Gestão descoplicada para agências de marketing.",
            favicon: "../images/aeon-logo.png",
            logoImagem: "../images/aeon-logo.png",
            dadosUsuario: req.session.aeonAdminUser,
            servicoObj,
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
            dadosUsuario: req.session.aeonAdminUser


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
        
    },
    editarServico: async (req, res, next) => {
        const servicoObj = await db.Servico.findByPk(req.params.id);
        return res.render("sistema/editarServicos", {
            formAction: `/sistema/servicos/editar/${req.params.id}?_method=PUT`,
            buttonMessage: "Atualizar",
            formConteudo: servicoObj,
            titulo: "Sistema de Gestão para Agências de Marketing",
            separador: "|",
            marca: "Aeon",
            descricao: "Gestão descoplicada para agências de marketing.",
            favicon: "../images/aeon-logo.png",
            logoImagem: "../images/aeon-logo.png",
            dadosUsuario: req.session.aeonAdminUser
        });
    },
    acaoEditarServico: async (req, res, next) => {
        let alertaErros = validationResult(req);
        if (alertaErros.isEmpty()){
            const { nomeServico, tipoServico, valorServico, descricaoServico } = req.body;
            const servicoObj = {
                nomeServico: nomeServico,
                tipoServico: tipoServico,
                valorServico: valorServico,
                descricaoServico: descricaoServico
            }

            await db.Servico.update(servicoObj, { where: { id_servico: req.params.id }})
            
            res.redirect("/sistema/servicos");

        }
        else {
            console.log(alertaErros.mapped());
            console.log(req.body);
            console.log("Deu ruim!");
            console.log(alertaErros);
            return res.render("sistema/editarServicos", {
                formAction: `/sistema/servicos/editar/${req.params.id}?_method=PUT`,
                buttonMessage: "Atualizar",
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
    excluir: async (req, res) => {
        await db.Servico.destroy({ where: { id_servico: req.params.id } })

        res.redirect("/sistema/servicos");
    },
        
}

module.exports = servicosController;