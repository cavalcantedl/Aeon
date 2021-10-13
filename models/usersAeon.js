const bcrypt = require("bcryptjs");

const listaUsersAeon = [
  {
    id: 1,
    nome: "Maciel",
    sobrenome: "Eustaquio",
    empresa: "Teste",
    email: "maciel.seo@gmail.com",
    password: "$2a$10$leORMfkEZcCRyFXUSV0UgO.g599V8pu./aq9uB5A5rZ2MrcUJ6yb.",
  },
  {
    id: 2,
    nome: "Lucas",
    sobrenome: "Cavalcante",
    empresa: "Teste",
    email: "lucas@teste.com.br",
    password: "$2a$10$leORMfkEZcCRyFXUSV0UgO.g599V8pu./aq9uB5A5rZ2MrcUJ6yb.",
  },
  {
    id: 3,
    nome: "Paula",
    sobrenome: "Borges",
    empresa: "Teste",
    email: "paula@teste.com.br",
    password: "$2a$10$leORMfkEZcCRyFXUSV0UgO.g599V8pu./aq9uB5A5rZ2MrcUJ6yb.",
  },
  {
    id: 4,
    nome: "Mark",
    sobrenome: "Zuckerberg",
    empresa: "Teste",
    email: "mark@teste.com.br",
    password: "$2a$10$leORMfkEZcCRyFXUSV0UgO.g599V8pu./aq9uB5A5rZ2MrcUJ6yb.",
  },
];

function verificaLogin(login) {
  let resultado = listaUsersAeon.find((usuario) => {
    return usuario.email === login.email;
  });
  if (resultado != undefined) {    
    
    if (bcrypt.compareSync(login.password, resultado.password)) {
      
      return {
        login: true,
        erro: false,
        email: true,
      };
    } else {
      return {
        login: false,
        erro: true,
        email: true,
      };
    }
  } else {
    return {
      login: false,
      erro: false,
      email: false,
    }
  }
}

function listaUsuarios() {
  return listaUsersAeon;
}

function cadastraUsuario(cadastro) {
  let resultado = listaUsersAeon.find((cliente) => {
    if (cliente.email == cadastro.email) {
      return cliente;
    }
  });

  if (resultado) {
    return {
      cadastrado: false,
      exists: true,
    };
  } else {
    let encryptPassword = bcrypt.hashSync(cadastro.password, 12);
    let usersAeon = {
      id: listaUsersAeon.length + 1,
      nome: cadastro.nome,
      sobrenome: cadastro.sobrenome,
      empresa: cadastro.empresa,
      email: cadastro.email,
      password: encryptPassword,
    };
    listaUsersAeon.push(usersAeon);
    return {
      cadastrado: true,
      exists: false,
    };
  }
}

module.exports = {
  listaUsuarios,
  cadastraUsuario,
  verificaLogin,
};
