const express = require("express");
const bodyParser = require("body-parser")

const app = express();

const fucionariosRoutes = require('./api/routes/funcionarios.js')

app.listen(8000,
    console.log("porta funcionando")
);

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/funcionarios', fucionariosRoutes)