
const list = (req,res)=>{
    console.log("shiken list");
}

const get_new =(req,res)=>{
    console.log('new shiken_control form');
}

const post = (req,res)=>{
    console.log('post new shiken');
}

const detail_edit = (req,res)=>{
    console.log('shiken detail and edit')
}

const put = (req,res)=>{
    console.log('edit shiken')
}

const del = (req,res)=>{
    console.log('delete shiken');
}

module.exports={
    list,
    get_new,
    post,
    detail_edit,
    put,
    del
}
