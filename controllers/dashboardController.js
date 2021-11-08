let dashboardController = {
    dashboard: (req, res, next) => {
        res.render("sistema/dashboard", {
            titulo: "Sistema de Gestão para Agências de Marketing",
            separador: "|",
            marca: "Aeon",
            descricao: "Gestão descoplicada para agências de marketing.",
            favicon: "../images/aeon-logo.png",
            logoImagem: "../images/aeon-logo.png",
        })
    }
}

module.exports = dashboardController;