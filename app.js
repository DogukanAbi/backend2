const express = require('express');
const hbs = require('hbs');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

const puplicDirectory = path.join(__dirname, './puplic');
app.use(express.static(puplicDirectory));

app.use(express.urlencoded( {extended: false}));
app.use(express.json());

app.set('view engine', 'hbs');

const MongoURL = 'mongodb+srv://yildirim3802:DuWurst%40022@cluster0.hobiecp.mongodb.net/test';

const connectDB = async() => {
    try {
        mongoose.connect(MongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');

    } catch(error) {
        console.log('Error connecting to database');

    }
}
connectDB();

app.use('/', require('./routes/pages'));
app.use('/product', require('./routes/product'));
app.use('/checkout', require('./routes/checkout'));




app.listen(5000, () =>{
    console.log('Server is running on 5000');
});

