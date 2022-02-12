const { check } = require("express-validator");

const validaCadastroUsuario = [
    check("nomeFantasia").notEmpty().withMessage("O campo não pode ficar vazio").isLength({min:2}).withMessage("O nome do cliente deve ser maior que 1 caracter"),
    check("razaoSocial").notEmpty().withMessage("O campo não pode ficar vazio").isLength({min:2}).withMessage("A razão social deve ser maior que 1 caracter"),
    check("logradouro").notEmpty().withMessage("O campo não pode ficar vazio").isLength({min:5}).withMessage("O endereço precisa ser maior que 4 caracteres"),
    check("cidade").notEmpty().withMessage("O campo não pode ficar vazio").isLength({min:3}).withMessage("O nome da cidade precisa ser maior que 2 caracteres"),
    check("estado").notEmpty().withMessage("O campo não pode ficar vazio"),
    check("cep").notEmpty().withMessage("O campo não pode ficar vazio").isLength({min:9, max:9}).withMessage("Insira um valor de CEP válido"),
    check("cnpj").notEmpty().withMessage("O campo não pode ficar vazio").isLength({min:18, max:18}).withMessage("Insira um valor de CNPJ válido"),
    check("telefoneCelular").notEmpty().withMessage("O campo não pode ficar vazio").isLength({min:15, max:15}).withMessage("Insira um valor de celular válido"),
    check("dataEntrada").notEmpty().withMessage("O campo não pode ficar vazio").isDate().withMessage("Insira um valor de data válido."),
    check("nomeResponsavel").notEmpty().withMessage("O campo não pode ficar vazio").isLength({min:3}).withMessage("O nome do responsável deve ser maior que 2 caracteres"),
];

module.exports = {
    validaCadastroUsuario
};