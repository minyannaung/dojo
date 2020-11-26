
let mongoose = require('mongoose');

before(function(done){
mongoose.connect('mongodb+srv://shaun:1234@testing.ujv4y.mongodb.net/DOJO_TEST?retryWrites=true&w=majority', { useNewUrlParser: true , useUnifiedTopology: true });
    mongoose.connection.once('open' , function(){
        console.log('DOJO_TEST is connected \n');
        done();
    }).on('error', function(error){
        console.log('CONNECTION ERROR', error);
    });
})


