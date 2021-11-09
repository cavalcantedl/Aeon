CREATE SCHEMA IF NOT EXISTS aeon;

USE aeon;

CREATE TABLE usuarios (
	id_usuario INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    imagem_usuario VARCHAR(255),
    nome VARCHAR(255) NOT NULL
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    is_ativo SMALLINT UNSIGNED DEFAULT 0,
    is_administrador SMALLINT UNSIGNED DEFAULT 1,
    is_usuario SMALLINT UNSIGNED DEFAULT 0,
    PRIMARY KEY (id_usuario),

);

CREATE TABLE funcionarios (
    id_funcionario INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    data_adminissao DATE NOT NULL,
    data_demissao DATE NOT NULL,
    PRIMARY KEY (id_funcionario),
    FOREIGN key (salarios_id_salario) REFERENCES salarios (id_salario),
    FOREIGN key (funcoes_id_funcao) REFERENCES funcoes (id_funcao),
);

CREATE TABLE salarios (
    id_salario INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    salario DECIMAL(7,2) NOT NULL,
    PRIMARY KEY (id_funcionario)
);

CREATE TABLE comissoes (
    id_comissao INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    valor_comissao DECIMAL(4,2) NOT NULL,
    PRIMARY KEY (id_comissao)
    FOREIGN key (funcionarios_id_funcionario) REFERENCES funcionarios (id_funcionario),
);

CREATE TABLE ferramentas (
    id_ferramenta INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nome_ferramenta VARCHAR(255) NOT NULL,
    descricao_ferramenta VARCHAR(255) NOT NULL,
    FOREIGN key (funcionarios_id_funcionario) REFERENCES funcionarios (id_funcionario),
);

CREATE TABLE funcoes (
    id_funcao INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nome_funcao VARCHAR(255) NOT NULL,
    FOREIGN key (funcionarios_id_funcionario) REFERENCES funcionarios (id_funcionario),
);

CREATE TABLE clientes (
    id_cliente INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
);

USE aeon;

CREATE TABLE `perfil`(
	`id_perfil` INT(10) UNSIGNED AUTO_INCREMENT,
    `is_administrador` SMALLINT,
    `is_analista` SMALLINT,
    PRIMARY KEY (`id_perfil`)
);
CREATE TABLE `usuario`(
	`id_usuario` INT UNSIGNED AUTO_INCREMENT,
    `imagem` VARCHAR(255),
    `nome` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL UNIQUE,
    `senha` VARCHAR(50) NOT NULL,
    `ativo` SMALLINT,
    PRIMARY KEY (`id_usuario`)
);
CREATE TABLE `cliente`(
	`id_cliente` INT UNSIGNED AUTO_INCREMENT,
    `razao_social` VARCHAR(255),
    `cnpj` VARCHAR(14),
    `nome_fantasia` VARCHAR(255),
    `telefone_fixo` VARCHAR(12),
    `telefone_celular` VARCHAR(13),
    `nome_responsavel` VARCHAR(255),
    PRIMARY KEY (`id_cliente`)
);
CREATE TABLE `funcionario`(
	`id_funcionario` INT UNSIGNED AUTO_INCREMENT,
    `nome` VARCHAR(255),
    `data_admissao` DATE,
    `data_demissao` DATE,
    PRIMARY KEY (`id_funcionario`)
);
CREATE TABLE `endereco`(
	`id_endereco` INT UNSIGNED AUTO_INCREMENT,
    `logradouro` VARCHAR(255),
    `numero` VARCHAR(45),
    `complemento` VARCHAR(45),
    `bairro` VARCHAR(45),
    `cidade` VARCHAR(45),
    `estado` VARCHAR(45),
    `pais` VARCHAR(45),
    `cep` VARCHAR(8),
    PRIMARY KEY (`id_endereco`)
);
CREATE TABLE `custo_variado` (
	`id_custo_variado` INT UNSIGNED AUTO_INCREMENT,
    `tipo_custo_variado` VARCHAR(255),
    `valor_custo_variado` DECIMAL(10,2),
    PRIMARY KEY (`id_custo_variado`)
);
CREATE TABLE `comissao` (
	`id_comissao` INT UNSIGNED AUTO_INCREMENT,
    `valor_comissao` DECIMAL(4,2),
    PRIMARY KEY (`id_comissao`)
);
CREATE TABLE `salario` (
	`id_salario` INT UNSIGNED AUTO_INCREMENT,
    `salario` DECIMAL(7,2),
    PRIMARY KEY (`id_salario`)
);
CREATE TABLE` servico` (
	`id_servico` INT UNSIGNED AUTO_INCREMENT,
    `nome` VARCHAR(255),
    `tipo_servico` VARCHAR(255),
    `valor_servico` DECIMAL(7,2),
    `servicocol` VARCHAR(45),
    PRIMARY KEY (`id_servico`)
);
CREATE TABLE `custo_fixo` (
	`id_custo_fixo` INT UNSIGNED AUTO_INCREMENT, 
    `tipo_custo_fixo` VARCHAR(255),
    `valor_custo_fixo` DECIMAL(10,2),
    PRIMARY KEY (`id_custo_fixo`)
);
CREATE TABLE `contrato` (
	`id_contrato` INT UNSIGNED AUTO_INCREMENT,
    PRIMARY KEY (`id_contrato`)
);
CREATE TABLE `ferramenta`(
	`id_ferramenta` INT UNSIGNED AUTO_INCREMENT,
    PRIMARY KEY (`id_ferramenta`)
);    
    