const { check } = require("express-validator");
const validaCadastroServico = [
    check("nomeServico").notEmpty().withMessage("O campo não pode ficar vazio").isLength({min:2}).withMessage("O nome do funcionário deve ser maior que 1 caracter"),
    check("tipoServico").notEmpty().withMessage("O campo não pode ficar vazio").isLength({min:2}).withMessage("O nome do funcionário deve ser maior que 1 caracter"),
    check("valorServico").notEmpty().withMessage("O campo não pode ficar vazio"),
    check("descricaoServico").notEmpty().withMessage("O campo não pode ficar vazio").isLength({min:10}).withMessage("A função precisa ser maior que 10 caracteres"),
];

module.exports = {
    validaCadastroServico
};