const loginAuth = (req, res, next) => {
    // Verifica session

    if (typeof req.session.aeonAdminUser !== "undefined") {
        res.redirect("/sistema");
        return;
    }
    next();
}

module.exports = loginAuth;