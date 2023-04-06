require('dotenv').config({path: 'variaveis.env'});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const routes = require('./routes');

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extends: false}));
server.use(bodyParser.json());
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

server.use('/api', routes);

server.listen(process.env.PORT, ()=>{
    console.log(`server rodando em: http://localhost:${process.env.PORT}`);
})
