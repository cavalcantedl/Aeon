const db  = require("../../models");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

let usuariosController = {
    index: (req, res, next) => {
        return res.render("sistema/admin/index", {
            titulo: "Sistema de Gestão para Agências de Marketing",
            separador: "|",
            marca: "Aeon",
            descricao: "Gestão descoplicada para agências de marketing.",
            favicon: "../images/aeon-logo.png",
            logoImagem: "../images/aeon-logo.png",
            dadosUsuario: req.session.aeonAdminUser,
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
            dadosUsuario: req.session.aeonAdminUser,
            usuarioObj,
        })
    },

    cadastroUsuario:(req, res, next) => {
        return res.render("sistema/admin/cadastrarUsuarios", {
            formAction: `/sistema/admin/usuarios/cadastrar`,
            buttonMessage: "Cadastrar",
            formConteudo: req.body,
            titulo: "Sistema de Gestão para Agências de Marketing",
            separador: "|",
            marca: "Aeon",
            descricao: "Gestão descoplicada para agências de marketing.",
            favicon: "../images/aeon-logo.png",
            logoImagem: "../images/aeon-logo.png",
            dadosUsuario: req.session.aeonAdminUser,
        })
    },
    
    acaoCadastroUsuario: async (req, res, next) => {
        let alertaErros = validationResult(req);
        if (alertaErros.isEmpty()){
            const { nomeUsuario, usernameUsuario, emailUsuario, senhaUsuario, isAdministrador } = req.body;

            const salt = bcrypt.genSaltSync(10);
            senhaCriptografada = bcrypt.hashSync(senhaUsuario, salt);

            let imagemUsuario = null;
            if (req.file !== undefined) {
                imagemUsuario = req.file.filename;
            } else {
                imagemUsuario = "logotipoCliente.png";
            }

            const usuarioObj = {
                nome: nomeUsuario,
                username: usernameUsuario,
                email: emailUsuario,
                senha: senhaCriptografada,
                is_administrador: isAdministrador,
                imagem: imagemUsuario,
            };
            console.log(usuarioObj);

            await db.Usuario.create(usuarioObj);
            res.redirect("/sistema/admin/usuarios");

        }
        else {
            return res.render("sistema/admin/usuarios/cadastrar", {
                formAction: `/sistema/admin/usuarios/cadastrar`,
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

    editarUsuario: async (req, res, next) => {
        const usuarioObj = await db.Usuario.findByPk(req.params.id);
        return res.render("sistema/admin/editarUsuarios", {
            formAction: `/sistema/admin/usuarios/editar/${req.params.id}?_method=PUT`,
            buttonMessage: "Atualizar",
            formConteudo: usuarioObj,
            titulo: "Sistema de Gestão para Agências de Marketing",
            separador: "|",
            marca: "Aeon",
            descricao: "Gestão descoplicada para agências de marketing.",
            favicon: "../images/aeon-logo.png",
            logoImagem: "../images/aeon-logo.png",
            dadosUsuario: req.session.aeonAdminUser,
        });
    },

    acaoEditarUsuario:(req, res, next) => {

    },

    excluir:(req, res, next) => {

    },
};

module.exports = usuariosController 