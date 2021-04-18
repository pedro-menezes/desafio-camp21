# Desafio CAMP 2021 - Trilha Backend

Esse trabalho foi realizado a para o CAMP da ioasys e referente à trilha de Backend. Todas as informações sobre o desafio está disponível no [link](https://bitbucket.org/ioasys/teste-backend/src/master/ "link").

## Antes de executar
1. Criar arquivo .env contendo informações sobre o banco de dados que será utilizado (existe um arquivo de exemplo no diretório chamado .env.example).
2. Criar o banco de dados com o nome escolhido e registrado no .env.
3. É indicado inserções no banco para algun teste.
4. Depois deve executar os seguintes comandos, para criação das tabelas e algum seed:
```
npm install 
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all 
```
## Para executar
```
npm start run
```
## Postman
O arquivo 'Camp 2021.postman_collection.json' contém rotas para utilizar para testes através do Postman.