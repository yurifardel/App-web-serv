const express = require('express');
const mongoosse = require('mongoose');
const cors = require('cors');
const routes = require('./routes')


const app = express();


mongoosse.connect('mongodb://Fardell:cativaveadolfo97@cluster0-shard-00-00-uv5au.mongodb.net:27017,cluster0-shard-00-01-uv5au.mongodb.net:27017,cluster0-shard-00-02-uv5au.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors({origin: "http://localhost:3000"}));
app.use(express.json());
app.use(routes);

// METODOS HTTP: GET, POST, PUT, DELETE

// TIPO DE PARÂMETROS:

// QUERY PARAMS: request.query(filtros, ordenação, paginação ...)
// ROUTE PARAMS: request.params(identificar um recurso na alteração ou remoção)
// BODY: request.body(dados para criação ou alteração de um registro)

// MongoDB (não-relacional)

//yarn dev executa o servidor

app.listen(3333);