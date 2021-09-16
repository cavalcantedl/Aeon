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
    },
    login: (req, res, next) => {
        res.render('sistema/login', {
            title: 'Aeon - Login'
        }); /* Indica o caminho da página de login */ 
    },
    signup: (req, res, next) => {
        res.render('sistema/signup', {
            title: 'Aeon - Criar conta'
        }); /* Indica o caminho da página de criar conta */ 
    },
    senha: (req, res, next) => {
        res.render('sistema/senha', {
            title: 'Aeon - Recuperar senha'
        }); /* Indica o caminho da página de recuperacao de senha*/ 
    },
    emailSenha: (req, res, next) => {
        res.render('sistema/emailsenha', {
            title: 'Aeon - E-mail de senha enviado com sucesso'
        }); /* Indica o caminho da página de recuperacao de senha*/ 
    },
    cadastroCliente: (req, res, next) => {
        res.render('sistema/cadastrocliente', {
            title: 'Aeon - Cadastrar Cliente'
        }); /* Indica o caminho da página de cadastro de novo cliente*/ 
    },
};

module.exports = aeonController;