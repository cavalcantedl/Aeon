const bcrypt = require("bcrypt");

const listaUsersAeon = [
    {
        "id": 1,
        "nome":"Maciel",
        "sobrenome":"Eustaquio",
        "empresa":"Teste",
        "email": "maciel.seo@gmail.com",
        "password": "$2b$12$vDkhLUJ7U4f8WdKRFJgJnOQjr8EPmPTGjh/e.1yOE2L0XsAjgIpMe6",
    },
    {
        "id": 2,
        "nome":"Lucas",
        "sobrenome":"Cavalcante",
        "empresa":"Teste",
        "email": "lucas@teste.com.br",
        "password": "$2b$12$vDkhLUJ7U4f8WdKRFJgJnOQjr8EPmPTGjh/e.1yOE2L0XsAjgIpMe",
    },
    {
        "id": 3,
        "nome":"Paula",
        "sobrenome":"Borges",
        "empresa":"Teste",
        "email": "paula@teste.com.br",
        "password": "$2b$12$vDkhLUJ7U4f8WdKRFJgJnOQjr8EPmPTGjh/e.1yOE2L0XsAjgIpMe",
    },
    {
        "id": 4,
        "nome":"Mark",
        "sobrenome":"Zuckerberg",
        "empresa":"Teste",
        "email": "mark@teste.com.br",
        "password": "$2b$12$vDkhLUJ7U4f8WdKRFJgJnOQjr8EPmPTGjh/e.1yOE2L0XsAjgIpMe",
    }
];

module.exports = listaUsersAeon;