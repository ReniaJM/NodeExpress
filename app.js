const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/bookA');
const Book = require('./models/bookmodel');
const BookRouter = express.Router();
const port = process.env.PORT || 4000;

BookRouter.route('/books')
    .get((req,res) => {
        const query ={};
        if(req.query.country) {
            query.country=req.query.country;
        }

   Book.find(query,(err,books)=> {
       if(err) {
           return res.send(err)
       }
       return res.json(books)
   })
});

BookRouter.route('/books/:idBook')
    .get((req,res) => {
        Book.findById(req.params.idBook,(err,book)=> {
            if(err) {
                return res.send(err)
            }
            return res.json(book)
        })
    });







app.use('/api',BookRouter);

app.listen (port, ()=> console.log(`start serwer on port ${port}`));
