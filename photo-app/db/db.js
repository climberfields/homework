const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost/test';

mongoose.connect(connectionString,
{ useNewUrlParser: true})

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected at ', connectionString);
    
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose is disconnected');
});

mongoose.connection.on('error', (err) => {
    console.log(err, 'mongoose error');
})
