const { check } = require("express-validator");
const validaCadastroCliente = [
    check("nomeFantasia").notEmpty().withMessage("O campo não pode ficar vazio").isLength({min:2}).withMessage("O nome do cliente deve ser maior que 1 caracter"),
    check("razaoSocial").notEmpty().withMessage("O campo não pode ficar vazio").isLength({min:2}).withMessage("A razão social deve ser maior que 1 caracter"),
    check("endereco").notEmpty().withMessage("O campo não pode ficar vazio").isLength({min:10}).withMessage("O endereço precisa ser maior que 10 caracteres"),
];

module.exports = {
    validaCadastroCliente
};