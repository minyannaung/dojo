const mongoose = require('mongoose');
const {Schema, model} = mongoose;


const gakuseiSchema = new Schema({
    'photo': String,
    'name' : String,
    'gender' : String,
    'join_date' : String,
    'dath_of_birth' : String,
    'father_name' : String,
    'email' : String,
    'phone' : String,
    'personal_id' : {
      'region': String,
      'id' : String,
    },
    'address' : {
       'detail' : String,
       'state_province_region' : String,
        'zip': String,
        'city' : String,
        'country':String,
        'Township':String,
    },
    't&c_aggre': Boolean,
    'password' : String,
    'progress_record': [{
        'rank' : String,
        'rank_training_hr' : Number,
        'classes' : [{type : Schema.Types.ObjectId , ref : 'Class'}]
    }],
    'current_rank' : String,
    'total_training_hr' : String,
    'shiken_records' : [{type : Schema.Types.ObjectId , ref : 'Shiken_Record' }]
});

const Gakusei = new model('Gakusei',gakuseiSchema)

module.exports = Gakusei;





