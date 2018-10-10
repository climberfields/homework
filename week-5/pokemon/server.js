const express = require('express');
const app = express();
const Pokemon = require('./models/pokemon');


app.get('/', (req, res) => {
    console.log("this test works")
})


//
//app.get('/pokeon/', (req, res) => {
//    console.log('send works')
//    res.send(Pokemon);
//})

app.get('/pokemon/', (req, res) => {
    res.render('index.ejs', {
        pokemon: Pokemon
    });
});

app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs')
})

app.post('/pokemon')

app.get('/pokemon/:index', (req, res) => {
    res.render('show.ejs', {

        pokemon: Pokemon[req.params.index]
    })
})

app.listen(3000, (req, res) => {
    console.log("This shit works!")
})
