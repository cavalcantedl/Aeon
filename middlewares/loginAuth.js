const loginAuth = (req, res, next) => {
    // Verifica session
    console.log(req.session)
    if (typeof req.session.aeonAdminUser === "undefined") {
        res.redirect("/login");
        return;
    }
    next();
}

module.exports = loginAuth;