const express = require('express');

const app = express();

const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/bookAPI');
const Book = require('./models/bookmodel');

const port = process.env.PORT || 4000;

app.route('/books')
    .get ((req,res) => {
        Book.find((err,books) => {
            if(err) {
                return res.send(err);
            }
                return res.json(books)
        });
});

app.use(express.json());

app.get('/', (req,res) =>{
    res.send('czesc')
});

app.listen (port, ()=> console.log(`start serwer on port ${port}`));
