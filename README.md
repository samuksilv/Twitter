# Projeto de um Twitter simples 
Este é um projeto feito a partir do evento GoWeek. Aplicando tudo que foi ensinado.
Nesse projeto será criado um twitter bem simples, que possíbilita postar novos Tweets, e os usuários consigam ver os mesmos.
Para subir o banco de dados em mongo db foi utilizado a ferramenta: "mLab".

# Técnologias utilizadas:
--node js

--mongo db

--react js

Utilização da biblioteca Socket.io, que é um WeebHook para permitir que a api envie dados para todos os clientes em tempo real.
Assim possibilitando gerar notíficações dos novos tweets para todos os clientes conectados, bem como atualizando a parte Client automáticamente.


# Executar a WEBAPI
Basta rodar o comando dentro da pasta WebAPI: 
    "yarn start"

# Executar o WEBCLIENT
Basta rodar o comando dentro da basta WebClient: 
    "yarn start"

# Executar com o Docker compose
Basta rodar os seguintes comandos dentro da raiz do projeto:
    1° : "docker-compose build"
    2° : "docker-compose up"
