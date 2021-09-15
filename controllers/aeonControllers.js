const aeonController = {
    home: (req, res, next) => {
        res.render('home/home', { 
            title: 'Aeon - Gestão Descomplicada para Agência de Marketing' 
        }); /* Indica o caminho da homepage da aplicação */ 
    }
}

module.exports = aeonController;