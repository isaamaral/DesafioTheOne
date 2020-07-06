const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const hbs = require('express-handlebars');
const path = require('path');
const app = express();
const mongoHTML = "mongodb+srv://isaamaral:desafio00@cluster0.llttg.mongodb.net/cadastros?retryWrites=true&w=majority";

var connected = false;
mongoose.connect(mongoHTML, { useNewUrlParser : true })
    .then(doc => {
        connected = true;
        console.log('Conectou...')
    })
    .catch(err => {
        res.status(500).write('Código 500: Não conectou o Mongo...')
    });

app.use(bodyParser.urlencoded( {extended : false} ));
app.use(bodyParser.json());

app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts'}));
app.set('views', path.join(__dirname, 'views/'));
app.set('view engine', 'hbs');

const cadastroRoutes = require('./api/routes/cadastro');
const consultaRoutes = require('./api/routes/consulta');

app.use('/cadastro', cadastroRoutes);
app.use('/consulta', consultaRoutes);

const Pessoa = require('./api/models/pessoa');

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

app.get('/', (req,res,next) => {
    res.render('index');
});

module.exports = app;