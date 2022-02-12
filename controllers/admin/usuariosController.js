const db  = require("../../models");
const { validationResult } = require("express-validator");

let usuariosController = {
    index: (req, res, next) => {
        return res.render("sistema/admin/index", {
            titulo: "Sistema de Gestão para Agências de Marketing",
            separador: "|",
            marca: "Aeon",
            descricao: "Gestão descoplicada para agências de marketing.",
            favicon: "../images/aeon-logo.png",
            logoImagem: "../images/aeon-logo.png",
        })
    },

    usuario: async (req, res, next) => {
        const usuarioObj = await db.Usuario.findAll();
        return res.render("sistema/admin/usuarios", {
            titulo: "Sistema de Gestão para Agências de Marketing",
            separador: "|",
            marca: "Aeon",
            descricao: "Gestão descoplicada para agências de marketing.",
            favicon: "../images/aeon-logo.png",
            logoImagem: "../images/aeon-logo.png",
            usuarioObj,
        })
    },

    cadastroUsuario:(req, res, next) => {
        return res.render("sistema/admin/cadastrarusuarios", {
            formAction: `/sistema/admin/usuarios/cadastrar`,
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
    
    acaoCadastroUsuario:(req, res, next) => {

    },

    alteraUsuario:(req, res, next) => {

    },

    acaoAlteraUsuario:(req, res, next) => {

    },

    excluir:(req, res, next) => {

    },
};

module.exports = usuariosController 