const { check } = require("express-validator");
const moment = require("moment");

const validaCadastroUsuario = [
    check("nomeUsuario").notEmpty().withMessage("O campo não pode ficar vazio").isLength({min:2}).withMessage("O nome do nome deve ser maior que 1 caracter"),
    check("usernameUsuario").notEmpty().withMessage("O campo não pode ficar vazio").isLength({min:2}).withMessage("O username deve ser maior que 1 caracter"),
    check("emailUsuario").isEmail().notEmpty().withMessage("O campo não pode ficar vazio").isLength({ min: 5, max: 50 }).withMessage("O email precisa ser um email válido"),
];

module.exports = {
    validaCadastroUsuario
};