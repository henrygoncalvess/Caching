# Caching com Redis

### licença e tecnologias utilizadas

<img src="https://img.shields.io/github/license/henrygoncalvess/Caching?style=for-the-badge&labelColor=gray&color=97ca00"> <a href="https://www.mysql.com/"><img src="https://img.shields.io/badge/mysql-8.0.39-4479A1?style=for-the-badge&logo=mysql&logoColor=white&labelColor=gray"></a> <a href="https://expressjs.com/pt-br/"><img src="https://img.shields.io/badge/express-4.21.1-000000?style=for-the-badge&logo=express&logoColor=black&labelColor=gray"></a> <a href="https://www.npmjs.com/package/cors"><img src="https://img.shields.io/badge/cors-2.8.5-royalblue?style=for-the-badge&logo=cors&logoColor=black&labelColor=gray"></a> <a href="https://nodejs.org/pt"><img src="https://img.shields.io/badge/node-20.16.0-5FA04E?style=for-the-badge&logo=node.js&logoColor=5FA04E&labelColor=gray"></a> <a href="https://docs.npmjs.com"><img src="https://img.shields.io/badge/npm-10.8.2-CB3837?style=for-the-badge&logo=npm&logoColor=CB3837&labelColor=gray"></a> <a href="https://learning.postman.com/docs/introduction/overview/"><img src="https://img.shields.io/badge/postman-11.16.0-FF6C37?style=for-the-badge&logo=postman&logoColor=FF6C37&labelColor=gray"></a> <a href="https://www.npmjs.com/package/mysql2"><img src="https://img.shields.io/badge/mysql2-3.11.3-white?style=for-the-badge&logo=mysql2&logoColor=yellow&labelColor=gray"></a>

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
- **MySQL** - [Tutorial de instalação](https://www.alura.com.br/artigos/mysql-do-download-e-instalacao-ate-sua-primeira-tabela)

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
npm install cors@4.24.1 mysql2@3.11.3 express@4.21.1
```

<br>

## Instrução de uso

Inicie o servidor local e veja [API Endpoints](#api-endpoints) para testar as respostas da api

`repositorios\clonados\Caching`
``` bash
node server.js
```

## API Endpoints

No Postman *ou na linha de comando*  
teste as respostas da conexão com o MySQL seguindo os **endpoints** abaixo.

> [!tip]
> acesse este link, caso não saiba utilizar o Postman para fazer requisições [Postman](https://learning.postman.com/docs/introduction/overview/)  
> acesse este link, caso não saiba fazer requisições pela linha de comando [Clique aqui](https://www.campuscode.com.br/conteudos/comandos-curl-para-testar-requisicoes-api)

<br>

Rota | Descrição
--- | :---:
***GET*** ` http://localhost:3000/api/user ` | Lista todas as informações da tabela - [ver JSON](#get---response)
***POST*** ` http://localhost:3000/api/new/user ` | Adiciona um novo item na tabela - [ver JSON](#post---request)
***PUT*** ` http://localhost:3000/api/update/user ` | Atualiza as informações da tabela - [ver JSON](#put---request)
***DELETE*** ` http://localhost:3000/api/delete/user ` | Deleta uma linha da tabela - [ver JSON](#delete---request)