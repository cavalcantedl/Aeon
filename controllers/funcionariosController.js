const { validationResult } = require("express-validator");

let funcionariosController = {
    funcionarios: (req, res, next) => {
        res.render("sistema/funcionarios", {
            titulo: "Sistema de Gestão para Agências de Marketing",
            separador: "|",
            marca: "Aeon",
            descricao: "Gestão descoplicada para agências de marketing.",
            favicon: "../images/aeon-logo.png",
            logoImagem: "../images/aeon-logo.png",
        })
    },
    cadastrarFuncionarios: (req, res, next) => {
        res.render("sistema/cadastrarFuncionarios", {
            titulo: "Sistema de Gestão para Agências de Marketing",
            separador: "|",
            marca: "Aeon",
            descricao: "Gestão descoplicada para agências de marketing.",
            favicon: "../images/aeon-logo.png",
            logoImagem: "../images/aeon-logo.png",
        })
    },
    acaoCadastrarFuncionarios:(req, res, next) =>{        
        let alertaErros = validationResult(req);
        
        if (alertaErros.isEmpty()){
            res.redirect("/sistema/funcionarios");
            console.log(req.body)
            console.log("Deu bom!");
            console.log(alertaErros);
        }
        else {
            res.render("sistema/cadastrarFuncionarios", {
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

module.exports = funcionariosController;
