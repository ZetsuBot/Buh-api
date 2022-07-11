# **Node JS Rest-API**

<img src="https://i.ibb.co/RzWZPnP/IMG-20220703-233049.jpg" width="500">

Rest-API simples, usando NodeJS

Url:https://satoru-api.herokuapp.com/

# Instalação

# Requisitos (no Pc)
* [Node.js](https://nodejs.org/en/) (para uso local)
* [Git](https://git-scm.com/downloads)
* [VS Code](https://code.visualstudio.com/download) or Any Text Editor

## Clonando este repositório: (Pc ou Termux)
```cmd
> git clone https://github.com/bruno918/satoru-apis.git
> cd RESTAPI
```

Use `code .` para abrir o VS Code.

```cmd
> code .
```
## Instale as dependências 
```cmd
> npm install
```

## Executando o código 
```cmd
> npm start
```

# Alguns Recursos 

|     API              |
| :--------------:     |
| Downloader           |
| TextPro              |
| Anime                |
| Jogos                |
| Wallpaper            |


# Hospedando no heroku

 Vá para o [Heroku](https://heroku.com) e faça login

Crie um novo app (qualquer nome)

<img src="https://i.postimg.cc/Z5T8Btw2/newapp.png" width="300">

Instale [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

Caso esteja usando o termux, use npm i -g heroku

# Comandos 

```cmd
> heroku login
```

Em seguida:

```cmd
> cd RESTAPI
> git init
> heroku git:remote -a nome do seu app criado no heroku
```

Depois basta enviar os arquivos para o Heroku 
```cmd
> git add .
> git commit -am "mensagem qualquer"
> git push heroku master
```

Sucesso:

<img src="https://i.postimg.cc/j5bzy0NP/deploy.png" width="300">

