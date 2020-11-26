const mongoose = require('mongoose');
const {Schema ,model} = mongoose;

const sensei_schema = new Schema({
    'photo' : String,
    'name' : String,
    'gakusei_id' : {type : Schema.Types.ObjectId , ref : 'Gakusei'},
    'join_date' : {type : Date, default : Date.Now },
    'date_of_birth' : Date, 
    'email' : String, 
    'phone' : String,
    'password' : String,
    'progress_record' : {
        'rank' : String,
        'rank_training_hr': Number,
        'training_record' : [{
            'remark' : String,
            'class_detail' : {type : Schema.Types.ObjectId , ref : 'Class_Record'}
        }],
        'rank_teaching_hr': Number,
        'teaching_class' : [{
            'remark' : String,
            'class_detail' :  {type : Schema.Types.ObjectId ,ref : 'Class_Record'}
        }],
    },
    'current_responsible_class' : [{type : Schema.Types.ObjectId , ref : 'Class'}],
    'previous_responsible_class' : [{type : Schema.Types.ObjectId , ref : 'Class'}],
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
    'personal_id' : {
        'id_type' : String,
        'id' : String
    }
});

const Sensei = new model('sensei', sensei_schema);

module.exports = Sensei;

