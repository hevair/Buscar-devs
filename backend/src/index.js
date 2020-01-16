const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes')

mongoose.connect('mongodb+srv://hevair:91343609@cluster0-kkr5g.mongodb.net/xtreme1?retryWrites=true&w=majority',
{ useNewUrlParser: true,
 useUnifiedTopology: true 
})

const app = express();
app.use(express.json());
app.use(routes);


app.listen(3000,function(){
    console.log('servidor rodando')
})