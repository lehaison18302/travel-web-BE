//import express from 'express';
require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('public/css'));

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'./view/index.ejs'));
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


