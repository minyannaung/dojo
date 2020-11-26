const mongoose = require('mongoose');
const {Schema , model} = mongoose;

const class_schema = new Schema({
    'start_date' : Date,
    'title' : String, 
    'schedule':[{ 
        'day' : {type : String , enum : ['S','M','T','W','TU','F','SA'], uppercase : true  },
        'from' : {type : Number , max : 2400},
        'to' : {type : Number , max : 2400},
        'duration' : {type : Number , max : 2400}
    }],
    'total_training_hr_weekly' : {type : Number, max : 2400},
    'remark' : String,
    'current_responsible_sensei' : { type : Schema.Types.ObjectId , ref : 'Sensei' },
    'previous_responsible_sensei' : [{
        'sensei' : {type : Schema.Types.ObjectId , ref : 'Sensei'},
        'from_date' : Date,
        'to_date' : Date,
    }]
},{timestamps : true});

const Class = new model('classe', class_schema)


module.exports = Class;
