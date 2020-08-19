'use strict';

//Declarar as depências do arquvio
const express = require("express");
const app = express();


//Definir que o servidor vai escutar
const port = 1234;

//Configurando o servidor para escutar a porta definida
app.listen(port, () => {
    console.log(`Servidor rodando na o porta ${port}`);
});
