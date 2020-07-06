const express = require('express');
const mongoose =  require('mongoose');
const fs = require('fs');
const bodyParser = require('body-parser');

const path = require('path');
const Pessoa = require('../models/pessoa');

const router = express.Router();

router.get('/', (req,res) => {
    var path =  require('path');
    res.render('formulario')
});

router.post('/', (req, res) => {
    var path = require('path');

    const cadastrado = new Pessoa({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        nascimento: req.body.nasc,
        cpf: req.body.cpf,
        email: req.body.email,
        telefone: req.body.tel,
        endereco: req.body.rua + ", " + req.body.numero + ". " + req.body.cidade,
        curso: req.body.curso,
        formatura: req.body.formatura,
        mensagem: req.body.mensagem,
        curriculo: req.body.curriculo
    })

    cadastrado
    .save()
    .then(
        result => {
            res.render('formulario', {title: "Cadastre-se"})
    })
    .catch(err => {

        console.log(err);
        res.status(500).end('Código 500: Cadastro não adicionado ao Mongo...' + idglobal);
    })    
})

module.exports = router;