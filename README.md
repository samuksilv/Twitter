# Projeto de um Twitter simples 
Este é um projeto feito a partir do evento ``GoWeek``. Aplicando tudo que foi ensinado.
Nesse projeto será criado um twitter bem simples, que possíbilita postar novos Tweets, e os usuários logados consigam ver os mesmos.


# Técnologias utilizadas:

    - node js

    - mongo db

    - react js

Utilização da biblioteca ``socket.io``, que é um ``WebHook`` para permitir que a api envie dados para todos os clientes em tempo real.
Assim possibilitando gerar notíficações dos novos tweets para todos os clientes conectados, bem como atualizando a aplicação cliente automáticamente.

# configurações de váriaveis de ambiente do docker:

Para rodar o projeto com docker crie um arquivo ``.env`` na raiz do projeto, e nele configure as seguintes váriaveis de ambiente, bem como seus valores( existe um arquivo de exemplo na raiz do projeto, chamado ``example.env``  que pode ser usado como base) :

---

Váriaveis                      | Descrição
-------------------------------|-----------------------------
NODE_ENV                       | váriavel de ambiente do node, possíveis valores: ``production``, ``development``
MONGODB_URL                    | url de conexão com o mongodb
MONGO_INITDB_ROOT_USERNAME     | usuário do mongodb
MONGO_INITDB_ROOT_PASSWORD     | senha do usuário do mongodb


# Executar aplicação web, a api e um banco de dados mongodb com docker compose
Basta rodar os seguintes comandos dentro da ``raiz do projeto``:
```
 docker-compose up --build
```



# Executar apenas a api
Basta rodar o comando dentro da pasta ``./api`` : 
```
 yarn start
```

# Executar apenas a aplicação web
Basta rodar o comando dentro da pasta ``./frontend/twitter``: 
```
 yarn start
```

# Executar um banco de dados mongodb com docker
Dentro do do arquivo ``docker-compose.yml`` na raiz do projeto já vem configurado para subir um banco mongodb junto a api, caso deseje subir apenas o banco comente as seções no arquivo referentes aos serviços ``twiitter_api`` e ``twitter_app``.

