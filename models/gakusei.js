const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const gakuseiSchema = new Schema({
    'photo': String,
    'name' : String,
    'gender' : String,
    'join_date' : {type : Date , default : Date.Now },
    'date_of_birth' : Date,
    'father_name' : String,
    'email' : String,
    'phone' : Number,
    'personal_id' : {
      'id_type': String,
      'id' : String,
    },
    'address' : {
        'detail' : String,
        'state_province_region' : String,
        'zip': String,
        'city' : String,
        'country':String,
        'township':String,
    },
    't&c_aggre': Boolean,
    'password' : String,
    'performance_record': [{
        'rank' : String,
        'rank_training_hr' : Number,
        'training_record' : [{
            'remark' : String,
            'class_detail':{type : Schema.Types.ObjectId , ref : 'Class_Record'}
        }]
    }],
    'current_rank' : String,
    'total_training_hr' : String,
    'shiken_records' : [{type : Schema.Types.ObjectId , ref : 'Shiken_Record' }]
});

const Gakusei = new model('gakusei',gakuseiSchema)

module.exports = Gakusei;





