var express = require('express');
var app = express(),
    bodyParser = require("body-parser"),
    swaggerJsdoc = require("swagger-jsdoc"),
    swaggerUi = require("swagger-ui-express"),
    swaggerDocument = require("./swagger.json");
var cors = require('cors');

const router = express.Router();

app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,HEAD,OPTIONS,PUT,PATCH,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    next();
});

const racaoRoute = require('./src/routes/racaoRoute.js')
const usuarioRoute = require('./src/routes/usuarioRoute.js')


app.use(express.json());
app.use('/racao', racaoRoute);
app.use('/usuario', usuarioRoute);



app.get('/', function(req, res) {
    res.send('Hello World!')
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(8000, function() {
    console.log('Example app listening on port 8000!')
})