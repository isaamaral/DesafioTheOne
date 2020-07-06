const mongoose = require("mongoose");
const express = require("express");

const Pessoa = require("../models/pessoa");
const { title } = require("process");
const router = new express.Router();
conjunto = [];
router.get('/', (req, res) => {
    const documento = mongoose.model('Pessoa')
    .find()
    .lean()
    .exec(function (err,docs) {
        res.render('usuarios',{pessoas : docs});
    })},);



module.exports = router;