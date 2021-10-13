const {body, check,} = require("express-validator");

const validaLogin = [
    check("email").notEmpty().withMessage("Deve Informar o login").bail().isEmail().withMessage("Informar Email valido"),
    check("password").notEmpty().withMessage("Informar senha")
];
// validar com os campos name do form signup
const validaCadastro = [
    check("nome").notEmpty().withMessage("Informar nome para cadastro").bail().isLength({min:3}).withMessage("Nome deve ser maior que 3 caracteres"),
    check("sobrenome").notEmpty().withMessage("Informar data de nascimento valida").bail(),
    check("empresa").notEmpty().withMessage("Informar empresa"),
    check("email").notEmpty().withMessage("Informar email").bail().isEmail().withMessage("Informar Email valido"),
    check("password").notEmpty().withMessage("Informar senha de acesso").bail().isLength({min:6}).withMessage("pelo menos 6 caracteres"),
];

module.exports = {
    validaLogin,
    validaCadastro
}