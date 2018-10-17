const express = require('express');
const app = express();
const User = require('./Models/user');
const Photos = require('./Models/photos');
const methodOverride = require('method-override');
const photosController = require('./Controllers/photos');
const userController = require('./Controllers/user');
require('./db/db')




app.use('/photos', photosController);
app.use('/user', userController);
app.get('/', (req, res) => {
    console.log('broadcasting')
    res.send("Broadcasting page")
})

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.listen(3000, (req, res) => {
    console.log("It's Alive")
});