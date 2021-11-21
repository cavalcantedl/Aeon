CREATE SCHEMA IF NOT EXISTS aeon;

USE aeon;

CREATE TABLE IF NOT EXISTS usuarios (
	id_usuario INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    imagem_usuario VARCHAR(255),
    nome VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    is_ativo SMALLINT UNSIGNED DEFAULT 0,
    is_administrador SMALLINT UNSIGNED DEFAULT 1,
    is_usuario SMALLINT UNSIGNED DEFAULT 0,
    PRIMARY KEY (id_usuario)
);

CREATE TABLE IF NOT EXISTS funcionarios (
    id_funcionario INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    data_adminissao DATE NOT NULL,
    data_demissao DATE NOT NULL,
    PRIMARY KEY (id_funcionario),
    FOREIGN key (salarios_id_salario) REFERENCES salarios (id_salario),
    FOREIGN key (funcoes_id_funcao) REFERENCES funcoes (id_funcao)
);

CREATE TABLE IF NOT EXISTS salarios (
    id_salario INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    salario DECIMAL(7,2) NOT NULL,
    PRIMARY KEY (id_funcionario)
);

CREATE TABLE IF NOT EXISTS comissoes (
    id_comissao INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    valor_comissao DECIMAL(4,2) NOT NULL,
    PRIMARY KEY (id_comissao),
    FOREIGN key (funcionarios_id_funcionario) REFERENCES funcionarios (id_funcionario)
);

CREATE TABLE IF NOT EXISTS ferramentas (
    id_ferramenta INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nome_ferramenta VARCHAR(255) NOT NULL,
    descricao_ferramenta VARCHAR(255) NOT NULL,
    FOREIGN key (funcionarios_id_funcionario) REFERENCES funcionarios (id_funcionario)
);

CREATE TABLE IF NOT EXISTS funcoes (
    id_funcao INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nome_funcao VARCHAR(255) NOT NULL,
    FOREIGN key (funcionarios_id_funcionario) REFERENCES funcionarios (id_funcionario)
);

CREATE TABLE IF NOT EXISTS clientes (
    id_cliente INT UNSIGNED PRIMARY KEY AUTO_INCREMENT
);