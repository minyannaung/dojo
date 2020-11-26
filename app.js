const express = require('express');
const mongoose = require('mongoose');
const app = express();

//app setting
app.set('view engine', 'ejs'); 
express.json();

//Routers required
const class_routes = require('./routers/class.js')
const class_record_routes = require('./routers/class_record.js')
const gakusei_routes = require('./routers/gakusei.js') 
const shiken_routes = require('./routers/shiken.js')
const shiken_record_routes = require('./routers/shiken_record.js')
const sensei_routes = require('./routers/sensei.js')


//Routers Setup
app.get('/',(req,res)=>{ res.render('admin_login')})
app.use('/class', class_routes);
app.use('/class_record',class_record_routes)
app.use('/gakusei', gakusei_routes);
app.use('/shiken_record',shiken_record_routes);
app.use('/shiken',shiken_routes);
app.use('/sensei',sensei_routes);

app.use((req,res)=>{
    res.status(404).render('404.ejs');
})

mongoose.connect('mongodb+srv://shaun:1234@testing.ujv4y.mongodb.net/DOJO?retryWrites=true&w=majority', { useNewUrlParser: true , useUnifiedTopology: true })
.then(()=>{

    console.log('dojo databse is connected');
   
    app.listen('3000','localhost',()=>{
        console.log('port 3000 is ready with express');
    })

}).catch(e=>{
    console.log(e.message)
})

