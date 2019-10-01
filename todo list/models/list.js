const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    textfieldmain : {
        type : String,
        required : true

    },

    category : {
        type : String,
        required : true
    },

    date : {
        type : String

    }
});


const List = mongoose.model('List', listSchema);

module.exports = List;