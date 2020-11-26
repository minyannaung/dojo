module.exports.a_gakusei = {
    'photo' : 'nyan.png',
    'name' : 'Min Yan Naung Aye',
    'gender' : 'male',
    'join_date' : new Date(Date.UTC(2018 , 10 , 10)),
    'date_of_birth' : new Date(Date.UTC(1996 , 11 , 17)),
    'father_name' : 'U Shwe Aye',
    'email' : 'minyannaungaye@gmail.com',
    'phone': '959699589898',
    'personal_id' : {
        'id_type' : 'National ID',
        'id' : '12/DAKASA(N)007972'
    },
    'address' : {
        'Detail' : 'No. 21 , 4th floor , Thingaha St. ,',
        'township' : 'Kyout Myoung',
        'state_province_region' : 'East Yangon',
        'zip' : 1121,
        'city' : 'Yangon',
        'country' : 'Myanmar',
    }
}

module.exports.a_sensei = {
    'photo' : 'moe_thet.png',
    'name' : 'Moe Thet Ko Ko',
    'joined_date' : new Date(Date.UTC(2012, 7, 7)),
    'date_of_birth' : new Date(Date.UTC(1989,10,5)),
    'email' : 'moethet@gmail.com',
    'phone' : '9595148891',
    'current_rank' : 'Ni Dan', 
    'address' : {
        'Detail' : 'No. 21 , 4th floor , Thingaha St. ,',
        'township' : 'Kyout Myoung',
        'state_province_region' : 'East Yangon',
        'zip' : 1121,
        'city' : 'Yangon',
        'country' : 'Myanmar',
    },
    'personal_id' : {
        'id_type' : "Nation ID",
        'id' : "12 / DAKASA (N) 007972"
    }
}

module.exports.a_class = {
    'start_date' : new Date(Date.UTC(2020 , 11 , 10 , 15 , 0 , 0)),
    'title' : 'Tento Dori',
    'schedule': [
        {'day' : 'SA','from' : 900 , 'to' : 1000 , 'duration' : 100} ,
        {'day' : 'S' , 'from' : 1000 , 'to' : 1130 , 'duration' : 130}
    ],
    'total_training_hr_weekly' : 230,
    'remark' : '100 training hr and above'
}

module.exports.a_shiken = {
    'rank_applied' : 'Goe Kyu',
    'wazas' : [
        { 'waza' : 'Tenno Hennko', 'min_qty' :  6 , 'remark' : 'This is the start and end of aikido',
            'marking' : [
                {'grading' : 'a' , 'description' : 'well done'},
                {'grading' : 'b' , 'description' : 'good job'},
                {'grading' : 'c' , 'description' : 'just complete'},
                {'grading' : 'd' , 'description' : 'not complete'}
            ]
        },
        { 'threat' : 'Moreitae Dori' , 'waza' : 'Khokyu Nage' , 'min_qty' : 6 , 'remark' : 'The Start of of the all Nage Technique',
            'marking' : [
                {'grading' : 'a' , 'description' : 'well done'},
                {'grading' : 'b' , 'description' : 'good job'},
                {'grading' : 'c' , 'description' : 'just complete'},
                {'grading' : 'd' , 'description' : 'not complete'}
            ]
        },   
        { 'threat' : 'Shomen Uchi' , 'waza' : 'I Kyo' ,'form' : 'Omote', 'min_qty' : 6, 'remark' : 'Uchi must be strat with a strike',
            'marking' : [
                {'grading' : 'a' , 'description' : 'well done'},
                {'grading' : 'b' , 'description' : 'good job'},
                {'grading' : 'c' , 'description' : 'just complete'},
                {'grading' : 'd' , 'description' : 'not complete'}
            ]
        },
    ],
    'min_training_hr_current_rank' : 100,
    'overall_grading' : [
        {'grading' : 'A' , 'description' : 'well done'},
        {'grading' : 'B' , 'description' : 'good job'},
        {'grading' : 'C' , 'description' : 'just complete'},
        {'grading' : 'D' , 'description' : 'not complete'}
    ],
    'terms_condition' : 'not be more than 3 \'d\' for all wazas'
}

module.exports.update_data = {
    'title' : 'Beginner Class',
    'schedule': [
        {'day' : 'SA', 'from' : 900 , 'to' : 1000 , 'duration' : 100} ,
        {'day' : 'S' , 'from' : 900 , 'to' : 1000 , 'duration' : 100}
    ],
    'total_training_hr_weekly' : 230,
    'remark' : '100 training hr and above'
}


module.exports.classes = [
    {
    'start_date' : new Date(Date.UTC(2020 , 11 , 10 , 15 , 0 , 0)),
    'title' : 'Buki Waza',
    'schedule': [
        {'day' : 'SA','from' : 900 , 'to' : 1000 , 'duration' : 100} ,
        {'day' : 'S' , 'from' : 1000 , 'to' : 1130 , 'duration' : 130}
    ],
    'total_training_hr_weekly' : 230,
    'remark' : '100 training hr and above'
    },{
    'start_date' : new Date(Date.UTC(2020 , 10 , 10 , 17 , 30 , 0)),
    'title' : 'Tai Justu',
    'schedule': [
        {'day' : 'M','from' : 1730 , 'to' : 1900 , 'duration' : 130} ,
        {'day' : 'W' , 'from' : 1000 , 'to' : 1130 , 'duration' : 130}
    ],
    'total_training_hr_weekly' : 230,
    'remark' : '100 training hr and above'
    }
]
 
