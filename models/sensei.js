const mongoose = require('mongose')
const {Schema ,model} = mongoose;

const sensei_schema = new Schema({
    'name' : String,
    'gakusei_id' : {type : Schema.Types.ObjectId , ref : 'Gakusei'},
    'email' : String, 
    'ph_no' : String,
    'password' : String,
    'progress_record' : {
        'rank' : String,
        'rank_training_hr': Number,
        'training_class' : [{type : Schema.Types.ObjectId ,ref : 'Class_Record'}],
        'rank_teaching_hr': Number,
    },
    'current_rank' : String,
    'total_training_hr' : Number,
    'total_teaching_hr' : Number,  
    'shiken_records' : [ {type : Schema.Types.ObjectId , ref : 'Shiken_Record' }],
    'address' : {
       'state_province_region' : String,
        'zip': String,
        'detail' : String,
        'city' : String,
        'country':String,
        'Township':String,
    },
});

const Sensei = new model('Sensei', sensei_schema);

module.exports = Sensei;

