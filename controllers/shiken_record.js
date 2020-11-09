const list = (req,res)=>{
    console.log("shiken_record list");
}

const get_new =(req,res)=>{
    console.log('new shiken_record_control form');
}

const post = (req,res)=>{
    console.log('post new shiken_record');
}

const detail_edit = (req,res)=>{
    console.log('shiken_record detail and edit')
}

const put = (req,res)=>{
    console.log('edit shiken_record')
}

const del = (req,res)=>{
    console.log('delete shiken_record');
}

module.exports={
    list,
    get_new,
    post,
    detail_edit,
    put,
    del
}
