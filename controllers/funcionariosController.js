const db  = require("../models");
const { validationResult } = require("express-validator");
const moment = require("moment");

let funcionariosController = {
    funcionarios: async (req, res, next) => {
        const funcionarioObj = await db.Funcionario.findAll();

        res.render("sistema/funcionarios", {
            titulo: "Sistema de Gestão para Agências de Marketing",
            separador: "|",
            marca: "Aeon",
            descricao: "Gestão descoplicada para agências de marketing.",
            favicon: "../images/aeon-logo.png",
            logoImagem: "../images/aeon-logo.png",
            funcionarioObj,
           
        })
    },
    cadastrarFuncionarios: (req, res, next) => {
        return res.render("sistema/cadastrarFuncionarios", {
            formAction: `/sistema/funcionarios/cadastrar`,
            buttonMessage: "Cadastrar",
            formConteudo: req.body,
            titulo: "Sistema de Gestão para Agências de Marketing",
            separador: "|",
            marca: "Aeon",
            descricao: "Gestão descoplicada para agências de marketing.",
            favicon: "../images/aeon-logo.png",
            logoImagem: "../images/aeon-logo.png",
        })
    },
    acaoCadastrarFuncionarios: async (req, res, next) =>{        
        let alertaErros = validationResult(req);
        console.log(alertaErros.mapped());
        console.log(req.body);
        console.log("Deu ruim!");
        console.log(alertaErros);
        if (alertaErros.isEmpty()){
            let { nome , salario, nomeFuncao, logradouro, cidade, numero, complemento, bairro, estado, pais, cep, dataAdmissao, dataDemissao } = req.body;
           
               if(dataDemissao == ""){ 
                  dataDemissao = null;
                }
          
            const funcionarioObj = {
                nome: nome,
                salario: salario,
                nomeFuncao: nomeFuncao,
                endereco: 
                    {
                        logradouro: logradouro,
                        numero: numero,
                        complemento: complemento,
                        bairro: bairro,
                        cidade: cidade,
                        estado: estado,
                        pais: pais,
                        cep: cep
                    },
                dataAdmissao: dataAdmissao,
                dataDemissao: dataDemissao
            };

            await db.Funcionario.create(funcionarioObj, { include: ["endereco"]});
            res.redirect("/sistema/funcionarios");

        }
        else {
            return res.render("sistema/cadastrarFuncionarios", {
                formAction: `sistema/funcionarios/cadastrar`,
                buttonMessage: "Cadastrar",
                titulo: "Sistema de Gestão para Agências de Marketing",
                separador: "|",
                marca: "Aeon",
                descricao: "Gestão descoplicada para agências de marketing.",
                favicon: "../images/aeon-logo.png",
                logoImagem: "../images/aeon-logo.png",
                alertaErros: alertaErros.mapped(),
                formConteudo: req.body,
            })
        }
    },
    editarFuncionario: async (req, res, next) => {
        const funcionario = await db.Funcionario.findByPk(req.params.id, {include: ["endereco"]});
        return res.render("sistema/editarFuncionario", {
            formAction: `/sistema/funcionarios/editar/${req.params.id}?_method=PUT`,
            formConteudo: funcionario,
            titulo: "Sistema de Gestão para Agências de Marketing",
            separador: "|",
            marca: "Aeon",
            descricao: "Gestão descoplicada para agências de marketing.",
            favicon: "../images/aeon-logo.png",
            logoImagem: "../images/aeon-logo.png",
        });
    },
    acaoEditarFuncionario: async (req, res, next) =>{
        let alertaErros = validationResult(req);
        if (alertaErros.isEmpty()){
            const funcionario = await db.Funcionario.findByPk(req.params.id, {include: ["endereco"]});
            let { nome , salario, nomeFuncao, logradouro, cidade, numero, complemento, bairro, estado, pais, cep, dataAdmissao, dataDemissao } = req.body;
               
            if(dataDemissao == ""){
                dataDemissao = null;
            }
            

            const funcionarioObj = {

                    nome: nome,
                    salario: salario,
                    nomeFuncao: nomeFuncao,
                    dataAdmissao: dataAdmissao,
                    dataDemissao: dataDemissao
            };
            const enderecoObj ={
                    logradouro: logradouro,
                    numero: numero,
                    complemento: complemento,
                    bairro: bairro,
                    cidade: cidade,
                    estado: estado,
                    pais: pais,
                    cep: cep

            }

            await db.Funcionario.update(funcionarioObj, { where: { id_funcionario: req.params.id }})
            
            .then(async function() {
                await db.Endereco.update(enderecoObj, { where: { id_endereco: funcionario.id_endereco }})
              })
            .catch(function(error){
                  console.log(error)
              })
        

            res.redirect("/sistema/funcionarios");

        }
        else {
            // console.log(alertaErros.mapped());
            // console.log(req.body);
            // console.log("Deu ruim!");
            // console.log(alertaErros);
            return res.render("sistema/editarFuncionario", {
                formAction: `/sistema/funcionarios/editar/${req.params.id}?_method=PUT`,
                titulo: "Sistema de Gestão para Agências de Marketing",
                separador: "|",
                marca: "Aeon",
                descricao: "Gestão descoplicada para agências de marketing.",
                favicon: "../images/aeon-logo.png",
                logoImagem: "../images/aeon-logo.png",
                alertaErros: alertaErros.mapped(),
                formConteudo: req.body,
            })
        }
    },

    excluir: async (req, res) => {
        const funcionario = await db.Funcionario.findByPk(req.params.id, {include: ["endereco"]});
        await db.Funcionario.destroy({ where: { id_funcionario: req.params.id } })

        .then(async function() {
            await db.Endereco.destroy( { where: { id_endereco: funcionario.id_endereco }})
          })
        .catch(function(error){
              console.log(error)
          })
          console.log(funcionario)
        res.redirect("/sistema/funcionarios");

    }
};

module.exports = funcionariosController;
