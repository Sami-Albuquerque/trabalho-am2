"use strict;"

/**
 * Aplicação para Testes em Sala de aula
 * @author Wellington Wagner F. Sarmento
 * @lisense GPLv3.0 or Later
 */

const express = require("express");
const app = express();
const routes = require("./routes");
var path = require('path');

const port = 3000;
const address = "localhost";

const expressLayouts = require('express-ejs-layouts');

app.use(express.static(__dirname + 'public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(expressLayouts);

app.use('/', routes);

const server = app.listen(port, address, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log(`Servidor executando no endereço ${host} e na porta ${port}`);
});