<h1 align= "center">Servidor Xadrez</h1>
<h3 align= "center">Servidor do jogo Xadrez para rodar em multiplayer</h3>
<h4 align="center"> 
🚧  Servidor Xadrez 🚀 Em construção...  🚧
</h4>

# Indice

- [Sobre](#-Sobre)
- [Tecnologias](#-Tecnologias)
- [Pré-requisitos](#-Pré-requisitos)
- [Rodando o Back End](#-Rodando-o-Back-End-(servidor))
- [Rodando o Front End](#-Rodando-o-Back-End-(servidor))
- [Features](#-Features)
- [Autor](#-Autor)

## ♟️ Sobre
Um projeto de um servidor do jogo Xadrez para jogar em multiplayer.
Criado como estudo para aprimorar o entendimento na linguagem JavaScript, arquitetura de software e princÍpios
SOLID.
O servidor foi programado na linguagem JavaScript.
Comunicação entre Front End e o servidor é realizada pelo protocolo HTTP, com uso da biblioteca Express para 
fazer a solicitação do Front End e respondê-la.

### 🛠 Tecnologias
As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)

Principais bibliotecas utilizadas:
- [Cors](https://www.npmjs.com/package/cors)
- [Express](https://expressjs.com/)
- [Uuid](https://www.npmjs.com/package/uuid)

## ✔️ Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

```bash
# Clone este repositório
git clone <https://github.com/AnaAssuncao/Back-end_Xadrez>

# Acesse a pasta do projeto no terminal/cmd
cd Back-end

# Instale as dependências
npm install

# Execute a aplicação em modo de desenvolvimento
npm Main.js

# O servidor inciará na porta:3030 - acesse <http://localhost:3030>
```

## 🎲 Rodando o Back End (servidor)
O servidor está rodando na plataforma em nuvem [Heroku](https://www.heroku.com/).
E inciará no Heroku: https://xadrez-server.herokuapp.com/api/v1.

## 🎲 Rodando o Front End
Entrar na página abaixo para poder jogar:
<https://anaassuncao.github.io/Front-end_Xadrez/>

## ⚙️ Features
O Controller do servidor é separado em arquivos que contém class referente a cada especificação, sendo elas: 
-Para acordar o servidor no Heroku;
-Referente ao início do jogo, informando sobre a conexões com o código da sala;
-Com funções referente ao movimentos do jogador, guardar no servidor, pegar o último movimento e informar se
esta incorreto;
-Para verificar os tempos referente ao jogo. Tempo que o jogador está inativo, de cada movimento, de fim de 
jogo e para reconectar ao jogo; 
-Para reconectar o jogador no jogo; e
-Referente ao status do jogo, para pegar as informações do status e informar desitência, fim de jogo e vitória;

No servidor possui três modelos de protótipos, referente ao jogo global - que encapsula os jogos de cada código,
o da sala - a qual está tudo conforme a um jogo de um código, e os protótipo que serão enviados para Front End.

## Autor
<img style="border-radius: 50%;" src="https://media-exp1.licdn.com/dms/image/C4E03AQGYUal9ZyvRtA/profile-displayphoto-shrink_800_800/0/1594406991642?e=1625097600&v=beta&t=T9H1zgdKQ4H1Ecrgm0AKNCkoxkE8xKL5zCo3_1GN0QM" width="150px;" alt=""/>
<br />
<sub><b>Ana Paula Assunção</b></sub>

[![Linkedin Badge](https://img.shields.io/badge/-AnaAssunção-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/ana-assuncao/)](https://www.linkedin.com/in/ana-assuncao/) 