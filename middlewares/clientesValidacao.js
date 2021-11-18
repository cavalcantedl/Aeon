const { check } = require("express-validator");
const validaCadastroCliente = [
    check("nomeFantasia").notEmpty().withMessage("O campo não pode ficar vazio").bail().isLength({min:2}).withMessage("O nome do cliente deve ser maior que 1 caracter"),
    check("razaoSocial").notEmpty().withMessage("O campo não pode ficar vazio").bail().isLength({min:2}).withMessage("A razão social deve ser maior que 1 caracter"),
];

module.exports = {
    validaCadastroCliente
};