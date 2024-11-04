# Caching com Redis

### licença e tecnologias utilizadas

<img src="https://img.shields.io/github/license/henrygoncalvess/Caching?style=for-the-badge&labelColor=gray&color=97ca00"> <a href="https://expressjs.com/pt-br/"><img src="https://img.shields.io/badge/express-4.21.1-000000?style=for-the-badge&logo=express&logoColor=black&labelColor=gray"></a> <a href="https://nodejs.org/pt"><img src="https://img.shields.io/badge/node-20.16.0-5FA04E?style=for-the-badge&logo=node.js&logoColor=5FA04E&labelColor=gray"></a> <a href="https://docs.npmjs.com"><img src="https://img.shields.io/badge/npm-10.8.2-CB3837?style=for-the-badge&logo=npm&logoColor=CB3837&labelColor=gray"></a> <a href="https://learning.postman.com/docs/introduction/overview/"><img src="https://img.shields.io/badge/postman-11.16.0-FF6C37?style=for-the-badge&logo=postman&logoColor=FF6C37&labelColor=gray"></a> <a href="https://redis.io/"><img src="https://img.shields.io/badge/redis-4.7.0-FF4438?style=for-the-badge&logo=redis&logoColor=FF4438&labelColor=gray"></a>

Armazenamento em cache é o processo de armazenamento de cópias de arquivos em um cache, ou local de armazenamento temporário, para que eles possam ser acessados mais rapidamente. Tecnicamente, um cache é qualquer local de armazenamento temporário para cópias de arquivos ou dados.
  
<details open="open">
<summary>Tabela de Conteúdos</summary>
  
- [Instrução de instalação](#instrução-de-instalação)
  - [Pré-requisitos](#pré-requisitos)
  - [Clonando Repositório](#clonando-repositório)
  - [Etapas](#etapas)
- [Instrução de uso](#instrução-de-uso)
- [API Endpoints](#api-endpoints)

</details>

<br>

## Instrução de instalação

### Pré-requisitos
- **REDIS** - [Tutorial de instalação]()

Para a instalação dos frameworks, middlewares e dependências que possibilitaram a criação da API  
e a conexão com o MySQL é necessário que você possua as seguintes ferramentas:

- **Node.js** - [Tutorial de instalação](https://nodejs.org/pt)

- **npm** - [Tutorial de instalação](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

Para fazer requisições e testar a conexão com o banco:
- **Postman** - [Tutorial de instalação](https://www.postman.com/downloads/)

> [!tip]
> Também é possível fazer requisições pela linha de comando.  
[Clique aqui](https://www.campuscode.com.br/conteudos/comandos-curl-para-testar-requisicoes-api) para aprender a fazer requisições pelo terminal

<br>

### Clonando Repositório
No Terminal, certifique de que você está na pasta onde vai ficar o repositório

```repositorios\clonados```
``` bash
git clone https://github.com/henrygoncalvess/Caching.git
```

<br>

### Etapas

#### 1. crie seu projeto Node.js

`repositorios\clonados\Caching`
``` bash
npm init
```

#### 2. em seguida, instale as dependências necessárias para o funcionamento do projeto.

`repositorios\clonados\Caching`
``` bash
npm install express@4.21.1 redis@4.7.0
```

<br>

## Instrução de uso

Inicie o servidor local

`repositorios\clonados\Caching`
``` bash
node server.js
```
