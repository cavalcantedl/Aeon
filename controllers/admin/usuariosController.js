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
        })
    },
    
    acaoCadastroUsuario: async (req, res, next) => {
        let alertaErros = validationResult(req);
        if (alertaErros.isEmpty()){
            const { nomeUsuario, usernameUsuario, emailUsuario, senhaUsuario, isAdministrador } = req.body;
            console.log("form aqui" , req.body);
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
                senha: senhaUsuario,
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

    editarUsuario:(req, res, next) => {

    },

    acaoEditarUsuario:(req, res, next) => {

    },

    excluir:(req, res, next) => {

    },
};

module.exports = usuariosController 