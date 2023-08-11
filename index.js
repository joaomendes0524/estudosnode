const express = require('express');
const app = express();
const filmes = require('./src/data/filmes.json');


app.get('/filmes', (req, res) =>{
    return res.json(filmes)
});


app.listen(3000, () => {
    console.log('SERVIDOR RODANDO!')
});