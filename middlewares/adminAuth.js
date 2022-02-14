const adminAuth = (req, res, next) => {
    // Verifica user admin

    const userAdmin = req.session.aeonAdminUser
    if(userAdmin.is_administrador == "não"){ 
        res.redirect("/login/lock");
    }
    else {
        return next();
    }
}

module.exports = adminAuth;