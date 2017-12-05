# Diagnes Front-End Challenge

**Aplicativo desenvolvido para o processo de seleção Diagnes.**

O aplicativo apresenta as principais funções de um cadastro de usuários e foi o primeiro contato com o Electron.

Foi escolhido o MySQL como banco de dados local.
Pode-se utilizar [MAMP](https://www.mamp.info/en/) para simplificar o processo de instalação.


## Como usar

**Este guia considera que o Banco de Dados MySQL está instalado e configurado corretamente.**

Crie o banco de dados importando o script abaixo:

```bash
-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Dec 05, 2017 at 12:05 PM
-- Server version: 5.6.35
-- PHP Version: 7.0.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `diagnes_challenge`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `name` varchar(255) NOT NULL,
  `phoneNumber` varchar(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `birthDate` date NOT NULL,
  `address` varchar(500) NOT NULL,
  `registerDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`name`, `phoneNumber`, `email`, `birthDate`, `address`, `registerDate`) VALUES
('Michel Marcondes', '(11)99661-2253', 'michel.marcondes@gmail.com', '1977-05-20', 'Av. Dr. Jorge Zarur, 471, nº 1501, bloco 1\nVila Ema, São José dos Campos - SP\nCEP 12243-081', '2017-12-05 09:58:57');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`email`);

```

Para clonar e executar este repositório você precisa do [Git](https://git-scm.com) e do [Node.js](https://nodejs.org/en/download/) instalados em seu computador.

Execute os comandos:
```bash
#Clonar repositorio
git clone https://github.com/michelmarcondes/Diagnes-Challenge.git
```

Abra o projeto no seu editor de preferência e configura os dados de conexões ao MySQL.
Preencha todas as variáves conforme suas configurações de banco de dados.

```bash
#Caminho do arquivo de conexão do Banco de Dados
<diretorio do projeto>/src/database.js
```

Salve o arquivo e execute os comandos abaixo:
```bash
#Instalar dependencias e executar o projeto
npm install && npm start
```


## Grato pela Oportunidade e aguardo contato!
