const express = require('express');

const app = express();

const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/bookAPI');
const Book = require('./models/bookmodel');

const port = process.env.PORT || 4000;

app.route('/books')
    .get ((reg,res) => {
   const response = 'ghghhg';
   res.json(response)
});

app.use(express.json());

app.get('/', (req,res) =>{
    res.send('czesc')
});

app.listen (port, ()=> console.log(`start serwer on port ${port}`));
