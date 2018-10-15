const express = require('express');
const app = express();
const Exercises = require('./Models/exercises');
require('./db/db')

app.get('/', (req, res) => {
    res.send('AYYY MY BOY')
});

app.get('/exercises/', (req, res) => {
    console.log("THIS INDEX PAGE WORKS")
    res.render('index.ejs', {
        exercises: Exercises
    });
    
});

app.get('/exercises/new', (req, res) => {
    console.log("NEW PAGE WORKS")
    res.render('new.ejs')
})

app.get('/exercises/:index', (req, res) => {
    console.log("Show page works")
    res.render('show.ejs', {
        exercises: Exercises[req.params.index]
    });
});



app.listen(3000, (req, res) => {
    console.log('Shield on')
})
