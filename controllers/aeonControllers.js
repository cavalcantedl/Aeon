let aeonController = {
    home: (req, res, next) => {
        res.render('sistema/home', { 
            title: 'Aeon - Gestão Descomplicada para Agência de Marketing' 
        }); /* Indica o caminho da homepage da aplicação */ 
    },
    gestaoClientes: (req, res, next) => {
        res.render('sistema/gestaoclientes', {
            title: 'Aeon - Gestão de Clientes'
        }); /* Indica o caminho da gestão de clientes */ 
    }
};

module.exports = aeonController;