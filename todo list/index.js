const express  = require('express');
const db = require('./cofig/mongoose');
// const route=require('./controllers');
const List = require('./models/list');
const app = express();
const port = 8000;

app.use('/',require('./routes/index'));
app.use('/profile', require('./routes/profile'));


app.set('view engine', 'ejs');
app.set('views','./views');
app.use(express.urlencoded());
app.use(express.static('assets'));


app.use('/add-item', require('./routes/index') );
//app.use('fin')


app.listen(port, function(err){
    if(err){
        console.log(`Error : ${err}`);
    }

    console.log(`Server is up and Running on Port ${port}`);
});