const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('broadcasting')
    res.send("Broadcasting page")
})



app.listen(3000, (req, res) => {
    console.log("It's Alive")
});