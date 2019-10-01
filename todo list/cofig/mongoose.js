const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo_list_db');

const db = mongoose.connection;

db.on ('error', console.error.bind(console, "Error connecting to data base"));

db.once('open', function(){
    console.log('Successfully connected to database');
});

