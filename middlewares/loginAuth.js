 const loginAuth = (req, res, next) => {
    // Verifica session 
    if (false) {
        next();
    }

    res.redirect("/login");
 }

 module.exports = loginAuth;