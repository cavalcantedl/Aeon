const db  = require("../models");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

let loginController = {
    login: (req, res, next) => {
        res.render("login/login", {
            titulo: "Sistema de Gestão para Agências de Marketing",
            separador: "|",
            marca: "Aeon",
            descricao: "Gestão descoplicada para agências de marketing.",
            favicon: "../images/aeon-logo.png",
            logoImagem: "../images/aeon-logo.png",
            formAction: `/login`,
            buttonMessage: " Entrar ",
        })
    },

    acaoLogin: async (req, res) => {
        const { email, senha } = req.body;

        const usuarioEncontradoDS = await db.Usuario.findOne({ where: { email: email}});
        console.log(usuarioEncontradoDS);

        if(usuarioEncontradoDS == null) {
            res.redirect("/login")
        }

        const usuarioEncontrado = usuarioEncontradoDS.dataValues;
        console.log(usuarioEncontrado);
        if (!bcrypt.compareSync(senha, usuarioEncontrado.senha)){
            res.redirect("/login");
        }

        req.session.aeonAdminUser = usuarioEncontrado;
        console.log(req.session);
        res.redirect("/sistema");
    },

    logout: (req,res,next) => {
        res.render("login/logout", {
            titulo: "Sistema de Gestão para Agências de Marketing",
            separador: "|",
            marca: "Aeon",
            descricao: "Gestão descoplicada para agências de marketing.",
            favicon: "../images/aeon-logo.png",
            logoImagem: "../images/aeon-logo.png",
        })
    },
    registrar: (req,res,next) => {
        res.render("login/registrar", {
            titulo: "Sistema de Gestão para Agências de Marketing",
            separador: "|",
            marca: "Aeon",
            descricao: "Gestão descoplicada para agências de marketing.",
            favicon: "../images/aeon-logo.png",
            logoImagem: "../images/aeon-logo.png",
        })
    },
    confirmar: (req,res,next) => {
        res.render("login/confirmarEmail", {
            titulo: "Sistema de Gestão para Agências de Marketing",
            separador: "|",
            marca: "Aeon",
            descricao: "Gestão descoplicada para agências de marketing.",
            favicon: "../images/aeon-logo.png",
            logoImagem: "../images/aeon-logo.png",
        })
    },
    recuperar: (req,res,next) => {
        res.render("login/recuperar", {
            titulo: "Sistema de Gestão para Agências de Marketing",
            separador: "|",
            marca: "Aeon",
            descricao: "Gestão descoplicada para agências de marketing.",
            favicon: "../images/aeon-logo.png",
            logoImagem: "../images/aeon-logo.png",
        })
    },
    lock: (req,res,next) => {
        res.render("login/lock", {
            titulo: "Sistema de Gestão para Agências de Marketing",
            separador: "|",
            marca: "Aeon",
            descricao: "Gestão descoplicada para agências de marketing.",
            favicon: "../images/aeon-logo.png",
            logoImagem: "../images/aeon-logo.png",
        })
    }
}

module.exports = loginController;