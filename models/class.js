const mongoose = require('mongoose');
const {Schema , model} = mongoose;

const class_schema = new Schema({
    'title' : String, 
    'schedule': String,
    'duration_per_session' : String,
    'remark' : String,
});


const Class = new model('Classe', class_schema)


module.exports = Class;
