/**
 * @author: architgajjar1992@gmail.com
 * @description Finding recurring transactions for Clerkie, Inc.
 */


'use strict'
const clerkiePost = require('./lib/component').Postcomponent;
const clerkieGet = require('./lib/component').Getcomponent;
const _ = require('lodash');
const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('', (req, resp) => {
    const transactions = req.body;
    clerkiePost(transactions).then((results)=>{
        console.log('results : ', JSON.stringify(results));
        resp.status(200).send(results);
    })
    .catch((err)=>{
        console.log('Error is : ', JSON.stringify(err.code));
        _.uniq(err, function (e) {
            return e.code;
        });
        resp.send(err);
    });
});

app.get('', (req, resp) => {
    // const transactions = req.body;
    clerkieGet().then((results)=>{
        console.log('results : ', JSON.stringify(results));
        resp.status(200).send(results);
    })
    .catch((err)=>{
        console.log('Error is : ', JSON.stringify(err.code));
        _.uniq(err, function (e) {
            return e.code;
        });
        resp.send(err);
    });
});

app.listen(1984);
