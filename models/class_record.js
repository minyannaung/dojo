const mongoose = require('mongoose');
const {Schema ,model} = mongoose;

const class_record_schema = new Schema({ 
    'date' : Date,
    'class' : {Type : Schema.Types.ObjectId , ref : 'Class'},
    'sensei' : {type : Schema.Types.ObjectId , ref : 'Sensei'},
    'gakusei' : [{type : Schema.Types.ObjectId ,ref: 'Gakusei'}],
    'training_hr' : Number,
    'total_gakusei' : Number,
    'remark' : String
});

const Class_Record = new model('Class_Record', class_record_schema);

module.exports = Class_Record;
