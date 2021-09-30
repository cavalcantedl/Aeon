const listaClientes = [
    {
        "id": 1,
        "empresa":"C&C",
        "criada":"23-09-2021",
    },
    {
        "id": 2,
        "empresa":"Pizzaria Domino's",
        "criada":"23-09-2021",
    },
];

let aeonController = {
    index: (req, res, next) => {
        res.render('index', { 
            title: 'Aeon - Gestão Descomplicada para Agência de Marketing' 
        }); /* Indica o caminho da homepage da aplicação */ 
    },

    home: (req, res, next) => {
        res.render('sistema/home', { 
            title: 'Aeon - Gestão Descomplicada para Agência de Marketing' 
        }); /* Indica o caminho da homepage da aplicação */ 
    },
    gestaoClientes: (req, res, next) => {
        res.render('sistema/gestaoclientes', {
            title: 'Aeon - Gestão de Clientes',
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
            clientes: listaClientes,
            title: 'Aeon - Cadastrar Cliente'
        }); /* Indica o caminho da página de cadastro de novo cliente*/ 
    },
    cadastroUsuario: (req, res, next) => {
        res.render('sistema/cadastrousuario', {
            title: 'Aeon - Cadastrar Usuário'
        }); /* Indica o caminho da página de cadastro de usuário*/ 
    },
    novoCliente: (req, res, next)=>{
         let {nome, segmento, valor, investimento} = req.body;

    }
};
module.exports = aeonController;