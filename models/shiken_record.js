const mongoose  = require('mongoose');
const {Schema , model} = require('mongoose');

const shiken_record_schema = new Schema({
    'gakusie' : {type : Schema.Types.ObjectId ,ref : 'Gakusei'},
    'rank_applied' : String,
    'shiken_date_time' : String,
    'at_training_hr_current_rank' : String,
    'examiner_recommander' : [{
        'name' : String,
        'detail' : { type :  Schema.Types.ObjectId , ref : 'Sensei' }
    }],
    'duration' : String,
    'wazas' : [{
        'threat' : String,
        'waza' : String,
        'form' : String,
        'qty' : Number,
        'grade' : {type : String , lowercase : true},
        'remark' : String 
    }],
    'overall_grade' : {type : String , uppdercase : true},
    'success_completion' : Boolean
});

const Shiken_Record = new model('Shiken_Record', shiken_record_schema);

module.exports = Shiken_Record;
