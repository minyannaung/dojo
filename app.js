const express = require('express');
const mongoose = require('mongoose');
const app = express();

//Routers
const gakusei_routes = require('./routers/gakusei.js') 
const shiken_routes = require('./routers/shiken.js')
const shiken_record_routes = require('./routers/shiken_record.js')
const sensei_routes = require('./routers/sensei.js')

app.get('/',(req,res)=>{
    console.log("Admin Dashboard")
})

//Routers Setup
app.use('/gakusei', gakusei_routes);
app.use('/shiken_record',shiken_record_routes);
app.use('/shiken',shiken_routes);
app.use('/sensei',sensei_routes)

app.use('*',(req,res)=>{
    console.log('404 not found');
})

mongoose.connect('mongodb+srv://shaun:1234@smoothie.ujv4y.mongodb.net/DOJO?retryWrites=true&w=majority', { useNewUrlParser: true , useUnifiedTopology: true })

.then(()=>{

    console.log('dojo databse is connected');
   
    app.listen('3000','localhost',()=>{
       console.log('port 3000 is ready with express');
    })

}).catch(e=>{
    console.log(e.message)
})

