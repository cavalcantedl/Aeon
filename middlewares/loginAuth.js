const loginAuth = (req, res, next) => {
    // Verifica session
    if(!req.session.aeonAdminUser){ 
        res.redirect("/login");
    }
    else {
        return next();
    }
}

module.exports = loginAuth;