# Caching com Redis

Armazenamento em cache é o processo de armazenamento de cópias de arquivos em um cache, ou local de armazenamento temporário, para que eles possam ser acessados mais rapidamente. Tecnicamente, um cache é qualquer local de armazenamento temporário para cópias de arquivos ou dados.

<br>

**licença e tecnologias utilizadas**:  
<img src="https://img.shields.io/github/license/henrygoncalvess/Caching?style=for-the-badge&labelColor=gray&color=97ca00"> <a href="https://expressjs.com/pt-br/"><img src="https://img.shields.io/badge/express-4.21.1-000000?style=for-the-badge&logo=express&logoColor=black&labelColor=gray"></a> <a href="https://nodejs.org/pt"><img src="https://img.shields.io/badge/node-20.16.0-5FA04E?style=for-the-badge&logo=node.js&logoColor=5FA04E&labelColor=gray"></a> <a href="https://redis.io/"><img src="https://img.shields.io/badge/redis-4.7.0-FF4438?style=for-the-badge&logo=redis&logoColor=FF4438&labelColor=gray"></a>

**Insalador de pacotes**:  
<a href="https://docs.npmjs.com"><img src="https://img.shields.io/badge/npm-10.8.2-CB3837?style=for-the-badge&logo=npm&logoColor=CB3837&labelColor=gray"></a>

**Ponto de Entrada**:  
<span><img src="https://img.shields.io/badge/server.js-333333?style=for-the-badge"></span>

<br>
  
<details open="open">
<summary>Tabela de Conteúdos</summary>
  
- [Instrução de instalação](#instrução-de-instalação)
  - [Pré-requisitos](#pré-requisitos)
  - [Clonando Repositório](#clonando-repositório)
  - [Etapas](#etapas)
- [Instrução de uso](#instrução-de-uso)
- [Funcionamento](#funcionamento)
- [Pensamento lógico do cache](#pensamento-lógico-do-cache)

</details>

<br>

## Instrução de instalação

### Pré-requisitos
- **REDIS** - [Tutorial de instalação](https://youtu.be/188Fy-oCw4w?si=xYljV44RNw7rg69y)

- **Node.js** - [Tutorial de instalação](https://nodejs.org/pt)

- **npm** - [Tutorial de instalação](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

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

<br>

## Funcionamento
O Redis é frequentemente usado para armazenar dados temporários que podem ser recuperados rapidamente,  
melhorando a performance de aplicações, especialmente para dados que são acessados com frequência.
Para conseguir vizualizar esse aumento de performance, siga os passos abaixo.

#### 1. em seu navegador, acesse `http://localhost:3000`

#### 2. Abra a ferramenta de desenvolvedor com `Ctrl + Shift + i`

#### 3. Selecione a seguinte aba:
![image](https://github.com/user-attachments/assets/22f9f6b3-587f-4811-93c9-99478c55287a)

Repare no JSON abaixo, a ferramenta do desenvovedor indica que ele levou **5 segundos** para  
carregar os dados
![image](https://github.com/user-attachments/assets/8912b70a-9749-41cb-94da-02052d8ada65)

Isso acontece pois existe uma função no código que simula essa demora para resgatar os dados.  
Mas após recarregar a página `F5`, perceba que o tempo para resgatar os dados diminuiu consideravelmente
Os dados resgatados a primeira vez que a página é acessada são armazenados em cache e todos os acessos  
posteriores resgatam os dados diretamente da cache, para reduzir o tempo de espera.

![image](https://github.com/user-attachments/assets/cb3a0242-40c3-413b-a3e4-582a84b8d0b7)

<br>

## Pensamento lógico do cache
Vamos levar em consideração que o nosso servidor está recebendo 100 requisições por minuto.  
Se cada requisição está demorando **2 segundos** para conseguir os dados, então o processo de  
coleta de dados está demorando **200 segundos**. Se aplicarmos um tempo de expiração de **1 minuto**  
na cache, será o suficiente para apenas uma dessas 100 requisições gastar 2 segundos obtendo os dados.

**Ou seja, não necessariamente a cache precise de um tempo de expiração muito longo,  
ela só precisa  ser mais rápida que o recurso original.**
