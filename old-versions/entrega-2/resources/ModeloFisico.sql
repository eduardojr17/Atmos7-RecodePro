-- 	CRIAÇÃO E USO DO BANCO ------------------
CREATE DATABASE atmos;
USE atmos;

-- 	CRIAÇÃO DE TABELAS ------------------
create table funcionario(
idFuncionario int auto_increment primary key not null ,
nome varchar (250) not null,
email varchar (250) not null UNIQUE,
senha varchar (20) not null
) ENGINE = innodb;

create table promocao(
idPromocao int auto_increment primary key not null ,
desconto decimal (8,2),
    fk_idFuncionario INT not null
) ENGINE = innodb;

create table viagem(
idDestino int not null auto_increment primary key,
origem varchar (50) not null,
destino varchar (50) not null,
dataIda varchar (10) not null,
dataVolta varchar (10) not null,
preco decimal (8,2) not null,
    fk_idFuncionario INT,
    fk_idPromocao INT
) ENGINE = innodb;

-- 	ALTERAR TABELAS PARA ADD CONSTRAINT FK ------------------
ALTER TABLE Viagem ADD CONSTRAINT FK_Viagem_2
    FOREIGN KEY (fk_idFuncionario)
    REFERENCES Funcionario (idFuncionario)
    ON DELETE CASCADE;
 
ALTER TABLE Viagem ADD CONSTRAINT FK_Viagem_3
    FOREIGN KEY (fk_idPromocao)
    REFERENCES Promocao (idPromocao)
    ON DELETE CASCADE;
 
ALTER TABLE Promocao ADD CONSTRAINT FK_Promocao_2
    FOREIGN KEY (fk_idFuncionario)
    REFERENCES Funcionario (idFuncionario)
    ON DELETE CASCADE;

-- INSERTS ------------------
INSERT INTO funcionario (nome, email, senha) 
VALUES ('Eduardo Junior', 'edutestemail@recode.org', 'edu12345678'); 

-- SELECTS / CONSULTAS ------------------
select * from atmoscrud.viagem;
select * from promocao;
select * from funcionario;
select * from agencia;
select * from viagem;
show tables;

-- DROPS / EXCLUSÕES ------------------
drop database atmos;
drop table viagem;
drop table funcionario;









