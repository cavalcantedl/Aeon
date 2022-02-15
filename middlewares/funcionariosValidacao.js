const { check } = require("express-validator");
const moment = require("moment");

const validaCadastroFuncionario = [
    check("nome").notEmpty().withMessage("O campo não pode ficar vazio").isLength({min:2}).withMessage("O nome do funcionário deve ser maior que 1 caracter"),
    check("salario").notEmpty().withMessage("O campo não pode ficar vazio"),
    check("nomeFuncao").notEmpty().withMessage("O campo não pode ficar vazio").isLength({min:2}).withMessage("A função precisa ser maior que 2 caracteres"),
    check("logradouro").notEmpty().withMessage("O campo não pode ficar vazio"),
    check("numero").notEmpty().withMessage("O campo não pode ficar vazio"),
    check("bairro").notEmpty().withMessage("O campo não pode ficar vazio"),
    check("cidade").notEmpty().withMessage("O campo não pode ficar vazio"),
    check("estado").notEmpty().withMessage("O campo não pode ficar vazio"),
    check("pais").notEmpty().withMessage("O campo não pode ficar vazio"),
    check("cep").notEmpty().withMessage("O campo não pode ficar vazio").isLength({min:9, max:9}).withMessage("Insira um valor de CEP válido"),
    check("dataAdmissao").notEmpty().withMessage("O campo não pode ficar vazio").isDate().withMessage("Insira um valor de data válido.")
];

module.exports = {
    validaCadastroFuncionario
};