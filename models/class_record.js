const mongoose = require('mongoose');
const {Schema ,model} = mongoose;

const class_record_schema = new Schema({ 
    'start_date_time' : {type : Date , default : Date.Now},
    'class' : {type : Schema.Types.ObjectId , ref : 'Class'},
    'sensei' : {type : Schema.Types.ObjectId , ref : 'Sensei'},
    'gakusei' : [{type : Schema.Types.ObjectId ,ref: 'Gakusei'}],
    'training_hr' : Number,
    'total_gakusei' : Number,
    'remark' : String
});

const Class_Record = new model('class_record', class_record_schema);

module.exports = Class_Record;
