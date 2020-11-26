let assert = require('assert');
let {connection} = require('mongoose');
let Class = require('../models/class');
let Sensei  = require('../models/sensei');
let {a_class, classes, a_sensei} = require('./data_set');

describe('Class Testing',function(){

 before(function(done){
    connection.collections.classes.drop(function(){
         connection.collections.senseis.drop(function(){
            let new_sensei = new Sensei(a_sensei);
            new_sensei.save().then(function(){
                done();
            }).catch(function(err){
               console.log(err);
                done();
            });
         })
    })
 });   

    it('create a new class' , function(done){
        
        let new_class = new Class(a_class);

        new_class.save().then(function(){
        
            assert(new_class.isNew === false);
            done();
        
       })
    });

    it('create many class' , function(done){
        
        Class.create(classes).then(function(){
            Class.countDocuments({}).then(function(count){
                assert(3===count);
                done();
            })
        })
    });


    it('find by class id' , async function(){
            let new_class = await Class.create(a_class);
            let found_class = await Class.findOne({'_id': new_class._id}).exec();
            //assert(new_class._id.toString()  == found_class._id.toString());
            assert.deepEqual(new_class._id,found_class._id);
    });

    it('find by class title',function(done){
    
        let title = 'Buki Waza';
        Class.find({'title' : title }).then(function(found_classes){
            assert.equal(title , found_classes[0].title);
            done();

        });
    });

    it('add a sensei to a class',function(){
        
    })

    it('add a sensei to a class', function(done){
        Sensei.findOne({'name': 'Moe Thet Ko Ko'}).then(function(found_sensei){
            console.log(found_sensei._id);
                        
        })
    })

//    it('find by sensei name',function(done){

  //  })

})


