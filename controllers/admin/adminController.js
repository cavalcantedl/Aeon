const db  = require("../../models");
const { validationResult } = require("express-validator");

let adminController = {
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

    usuarios: (req, res, next) => {
        return res.render("sistema/admin/usuarios", {
            titulo: "Sistema de Gestão para Agências de Marketing",
            separador: "|",
            marca: "Aeon",
            descricao: "Gestão descoplicada para agências de marketing.",
            favicon: "../images/aeon-logo.png",
            logoImagem: "../images/aeon-logo.png",
        })
    },
};

module.exports = adminController 