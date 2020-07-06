const mongoose = require("mongoose");
const express = require("express");
const { truncate } = require("fs");
const { type } = require("os");

const pessoaSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: '_id',
        required: true
    },
    nome: {
        type: mongoose.Schema.Types.String,
        ref: 'Nome',
        required: true
    },
    cpf: {
        type: mongoose.Schema.Types.Number,
        ref: 'CPF',
        /*validate : {
            isAsync: true,
            validator: function(v, cb) {
                setTimeout(function() {
                var cpfRegex = /\([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;
                    var msg = v + "Digite um CPF válido";
                    cb(cpfRegex.test(v), msg);
                }, 5)
            }
        },*/
        required: true
    },
    nascimento: {
        type: mongoose.Schema.Types.Date,
        ref: 'Nascimento',
        required: true
    },
    email: {
        type: mongoose.Schema.Types.String,
        ref: 'Email',
        required: true
    },
    telefone: {
        type:mongoose.Schema.Types.Number,
        ref: 'Telefone',
        /*validate : {
            isAsync: true,
            validator: function(v, cb) {
                setTimeout(function(){
                var phoneRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{5})\2([0-9]{4})/;
                    var msg = v + "Digite seu telefone no formato (000) 00000-0000";
                    cb(phoneRegex.test(v), msg);
                }, 5);
            }
        },*/
        required: true
    },
    endereco: {
        type: mongoose.Schema.Types.String,
        ref: 'Endereço',
        required: true
    },
    curso: {
        type:mongoose.Schema.Types.String,
        ref: 'Curso',
        required: true
    },
    formatura: {
        type:mongoose.Schema.Types.Date,
        ref: 'Formatura',
        required: true
    },
    mensagem: {
        type: mongoose.Schema.Types.String,
        ref: 'Mensagem',
    },
    curriculo: {
        type: mongoose.Schema.Types.DocumentArray,
        ref: 'Currículo',
        required: true
    }
});

module.exports = mongoose.model('Pessoa', pessoaSchema);