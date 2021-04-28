<h1 align= "center">Servidor Xadrez</h1>
<h3 align= "center">Servidor do jogo Xadrez para rodar em multiplayer</h3>
<h4 align="center"> 
🚧  Servidor Xadrez 🚀 Em construção...  🚧
</h4>

# Indice

- [Sobre](#-sobre)
- [Tecnologias](#-tecnologias)
- [Pré-requisitos](#-pré-requisitos)
- [Rodando o Back End](#-rodando-o-back-end-servidor)
- [Rodando o Front End](#-rodando-o-front-end)
- [Features](#-features)
- [Autor](#-autor)

## ♟️ Sobre
Servidor Xadrez tem como objetivo criar um servidor para rodar o jogo Xadrez de forma multiplayer, em que os jogadores recebem informações entre eles distante um do outro, apenas informando o nome e o código da sala. 

Este projeto emprega-se JavaScript ES5 puro (vanilla-js) e fez uso de bibliotecas para o desenvolvimento. Na sua elaboração utilizou-se dos princípios SOLID, juntamente com boas práticas de engenharia de software. 

Para realizar a comunicação entre Front End e o servidor usa-se o protocolo HTTP.

### 🛠 Tecnologias
As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)

Principais bibliotecas utilizadas:

- [Cors](https://www.npmjs.com/package/cors)
- [Express](https://expressjs.com/)
- [Uuid](https://www.npmjs.com/package/uuid)

## ✅ Pré-requisitos
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
npm start

# O servidor inciará na porta:3030 - acesse <http://localhost:3030>
```

## 🎲 Rodando o Back End (servidor)
O servidor está rodando na plataforma em nuvem [Heroku](https://www.heroku.com/).

E iniciará no acesso Heroku: https://xadrez-server.herokuapp.com/api/v1.

## 💻 Rodando o Front End
Para saber mais sobre a página web deste jogo acesse o link abaixo:
<https://github.com/AnaAssuncao/Front-end_Xadrez>

<h4 align= "center">Caso queira jogar Xadrez para se divertir com um amigo</h4>
<h4 align= "center" ><a href="https://anaassuncao.github.io/Front-end_Xadrez/" >Clique aqui</a></h4>

## 🔧 Features
O Controller do servidor é separado em arquivos que contém class referente a cada especificação, sendo a funcionalidades delas: 
- Acordar o servidor na plataforma nuvem (Heroku);
- Referenciar ao início do jogo, comunicando sobre as possíveis conexões pelo código da sala informado na comunicação. E quando um jogador conecta com uma sala ele possui um código apenas dele gerado pela biblioteca UUID;
- Conter funções referente aos movimentos dos jogadores, a qual guardar estes no histórico do servidor, pegar o último movimento quando solicitado por um jogador e recebe a informação caso o movimento está incorreto;
- Verificar os tempos referente ao jogo. Sendo eles: tempo de inatividade dos jogadores, do turno para poder mover, de fim de jogo e para reconectar ao jogo; 
- Reconectar o jogador no jogo; e
- Referenciar ao status do jogo, para os jogadores pegar as informações do status, e receber informação caso desitência, fim de jogo e vitória;

No servidor possui três modelos de protótipos, eles são: referente ao jogo global - que encapsula todos as salas de jogo; o da sala - a qual contém as funções e informações sobre um determinado jogo; e os protótipos que serão enviados como resposta da comunicação HTTP.

## Autor
<img style="border-radius: 50%;" src="https://media-exp1.licdn.com/dms/image/C4E03AQGYUal9ZyvRtA/profile-displayphoto-shrink_800_800/0/1594406991642?e=1625097600&v=beta&t=T9H1zgdKQ4H1Ecrgm0AKNCkoxkE8xKL5zCo3_1GN0QM" width="150px;" alt=""/>
<sub><b>Ana Paula Assunção</b></sub>

[![Linkedin Badge](https://img.shields.io/badge/-AnaAssunção-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/ana-assuncao/)](https://www.linkedin.com/in/ana-assuncao/) 