let pagesController = {
    homepage: (req, res, next) => {
        res.render("pages/index", {
            title: "Aeon",
            logoImage: "../images/aeon-logo.png",
        })
    }
}

module.exports = pagesController;