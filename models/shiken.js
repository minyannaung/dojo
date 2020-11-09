const mongoose = require('mongoose')
const {Schema , model} = mongoose 

const shiken_schema = new Schema({
    'rank_applied' : String,
    'wazas' : [{
        'threat' : String,
        'waza' : String,
        'form' : String,
        'min_qty' : Number,
        'remark' : String,
        'marking' : [{
            'grading' : {type : String , lowercase : true , max : 1},
            'description' : String
        }]
    }],
    'min_traing_hr_current_rank' : Number,
    'min_teaching_hr_current_rank' : Number,
    'overall_grading' : [{
        'grading' : {type : String , uppdercase : true ,max : 1},
        'description' : String 
    }],
    'terms_condition' : String
})

const Shiken = new model('Shiken', shiken_schema);

module.exports = Shiken;


