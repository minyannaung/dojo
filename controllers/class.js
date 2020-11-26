const {data, datas , update_data } = require('../test/data_set');
const Class = require('../models/class.js');

const list = async (req,res)=>{
    let jikanwari =[];
    try {
       jikanwari = await Class.find();
    } catch (error) {
        console.log(error.message);
    }
    res.render('jikanwari/list', {doc_title : 'jikanwaris' , data : jikanwari });
}

const get_new =(req,res)=>{
    res.render('jikanwari/new',{doc_title : 'new jikanwari'});
}

const detail_edit = async (req,res)=>{
    let jikanwari
    try {
        jikanwari = await Class.findById(req.params.id);
    } catch (error) {
        console.log(error.message);
    }
    res.render('jikanwari/detail_edit',{doc_title : jikanwari.title , data : jikanwari});
}

const post = async (req,res)=>{
    try{
        let new_class = Class.create(data);
        res.status(200).redirect('/class/');
    }catch(e){
        console.log(e.message);
    }
}


const put = async(req,res)=>{
    try {
        let result = await Class.findByIdAndUpdate(req.params.id,update_data);
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
    res.redirect('/class/'+req.params.id);
}

const del = async(req,res)=>{
    try {
        let result = await Class.deleteOne({'_id' : req.params.id});
    } catch (error) {
        console.log(error);
    }
    res.redirect('/class/');
}

//Search 
const find_by_title = async(req,res) =>{
    try{
        let result = await Class.find({'title' : req.params.id });
    }catch(error){
        console.log(error.message);
    } 
}

const find_by_sensei = async(req,res) => {
   try{
       let result  = await Class.find({'current_sensei' : req.params.sensei})
   }catch(error){
       console.log(error.message);
   }    
} 

module.exports={
    list,
    get_new,
    post,
    detail_edit,
    put,
    del
}

