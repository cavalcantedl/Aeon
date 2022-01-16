const db  = require("../models");
const { validationResult } = require("express-validator");

let clientesController = {
    clientes: (req, res, next) => {
        return res.render("sistema/clientes", {
            titulo: "Sistema de Gestão para Agências de Marketing",
            separador: "|",
            marca: "Aeon",
            descricao: "Gestão descoplicada para agências de marketing.",
            favicon: "../images/aeon-logo.png",
            logoImagem: "../images/aeon-logo.png",
        })
    },
    cadastrarClientes: (req, res, next) => {
        return res.render("sistema/cadastrarClientes", {
            formAction: `/sistema/clientes/cadastrar`,
            buttonMessage: "Cadastrar",
            formConteudo: {},
            titulo: "Sistema de Gestão para Agências de Marketing",
            separador: "|",
            marca: "Aeon",
            descricao: "Gestão descoplicada para agências de marketing.",
            favicon: "../images/aeon-logo.png",
            logoImagem: "../images/aeon-logo.png",
            isEditing: false,
        })
    },
    acaoCadastrarClientes: async (req, res, next) => {        
        let alertaErros = validationResult(req);
        
        if (alertaErros.isEmpty()){
            console.log(req.body);
            const { nomeFantasia, razaoSocial, logradouro, cidade, numero, complemento, bairro, estado, pais, cep, cnpj, celular, telefoneFixo, dataEntrada, dataSaida, logotipoCliente, nomeResponsavel } = req.body;
            const clienteObj = {
                nomeFantasia: nomeFantasia,
                razaoSocial: razaoSocial,
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
                cnpj: cnpj,
                telefoneCelular: celular,
                telefoneFixo: telefoneFixo,
                dataEntrada: dataEntrada,
                dataSaida: dataSaida,
                logotipoCliente: logotipoCliente,
                nomeResponsavel: nomeResponsavel,
            };

            await db.Cliente.create(clienteObj, { include: ["endereco"]});

            console.log(clienteObj);

            res.redirect("cadastrar");
            console.log(req.body)
            console.log("Deu bom!");
            console.log(alertaErros);
        }
        else {
            console.log(alertaErros.mapped());
            console.log(req.body);
            console.log("Deu ruim!");
            console.log(alertaErros);
            return res.render("sistema/cadastrarClientes", {
                formAction: `/sistema/clientes/cadastrar`,
                isEditing: false,
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
    alterar: async (req, res) => {
        const cliente = await db.Cliente.findByPk(req.params.id, {include: 'endereco'});

        res.render("sistema/cadastrarClientes", {
            formAction: `/sistema/clientes/alterar/${req.params.id}`,
            buttonMessage: "Atualizar",
            formConteudo: cliente,
            titulo: "Sistema de Gestão para Agências de Marketing",
            separador: "|",
            marca: "Aeon",
            descricao: "Gestão descoplicada para agências de marketing.",
            favicon: "../images/aeon-logo.png",
            logoImagem: "../images/aeon-logo.png",
            isEditing: true
        });
        // console.log(cliente)
    },
    // acaoAlterar: async (req, res) => {
    //     const { nomeFantasia, razaoSocial, logradouro, cidade, numero, complemento, bairro, estado, pais, cep, cnpj, celular, telefoneFixo, dataEntrada, dataSaida, logotipoCliente, nomeResponsavel } = req.body;
    //     const clienteObj = {
    //         nomeFantasia: nomeFantasia,
    //         razaoSocial: razaoSocial,
    //         endereco: 
    //             {
    //                 logradouro: logradouro,
    //                 numero: numero,
    //                 complemento: complemento,
    //                 bairro: bairro,
    //                 cidade: cidade,
    //                 estado: estado,
    //                 pais: pais,
    //                 cep: cep
    //             },
    //         cnpj: cnpj,
    //         telefoneCelular: celular,
    //         telefoneFixo: telefoneFixo,
    //         dataEntrada: dataEntrada,
    //         dataSaida: dataSaida,
    //         logotipoCliente: logotipoCliente,
    //         nomeResponsavel: nomeResponsavel,
    //     };

    //     await db.Cliente.update(clienteObj, { where: { id: req.params.id }});

    //     console.log(clienteObj + "Resultado")

    //     res.redirect("/sistema/clientes");
    // },
    acaoAlterar: async (req, res) => {
        
        const clienteObj = {
            nomeFantasia: req.body.nomeFantasia,
            razaoSocial: req.body.razaoSocial,
            endereco: 
                {
                    logradouro: req.body.logradouro,
                    numero: req.body.numero,
                    complemento: req.body.complemento,
                    bairro: req.body.bairro,
                    cidade: req.body.cidade,
                    estado: req.body.estado,
                    pais: req.body.pais,
                    cep: req.body.cep
                },
            cnpj: req.body.cnpj,
            telefoneCelular: req.body.celular,
            telefoneFixo: req.body.telefoneFixo,
            dataEntrada: req.body.dataEntrada,
            dataSaida: req.body.dataSaida,
            logotipoCliente: req.body.logotipoCliente,
            nomeResponsavel: req.body.nomeResponsavel,
        };

         await db.Cliente.update(clienteObj, {returning: true, where: { id_cliente: req.params.id } })


        console.log(clienteObj + "Resultado")

        res.redirect("/sistema/clientes");
    },
    excluir: async (req, res) => {
        await db.Cliente.destroy({ where: { id_cliente: req.params.id } });
        res.redirect("/sistema/clientes");
    },
};

module.exports = clientesController 