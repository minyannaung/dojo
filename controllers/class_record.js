
const Class = require('../models/class_record.js');

const list = (req,res)=>{
    console.log("class_record list");
}

const get_new =(req,res)=>{
    console.log('new class_record form');
}

const post = async (req,res)=>{
    console.log('post class_record records');
}

const detail_edit = (req,res)=>{
    console.log('class_record detail and edit')
}

const put = (req,res)=>{
    console.log('edit class_record')
}

const del = (req,res)=>{
    console.log('delete gakusel');
}

module.exports={
    list,
    get_new,
    post,
    detail_edit,
    put,
    del
}

