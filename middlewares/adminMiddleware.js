function validarAcesso (req, res, next) {
    let usuarioLogado = false;

    if (usuarioLogado) {
        next();
    } else {
        res.redirect("/acesserestrito");
    }
}

module.exports =  validarAcesso;

