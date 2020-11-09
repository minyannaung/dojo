const list = (req,res)=>{
    console.log("sensei list");
}

const get_new =(req,res)=>{
    console.log('new sensei_control form');
}

const post = (req,res)=>{
    console.log('post new sensei');
}

const detail_edit = (req,res)=>{
    console.log('sensei detail and edit')
}

const put = (req,res)=>{
    console.log('edit sensei')
}

const del = (req,res)=>{
    console.log('delete sensei');
}

module.exports={
    list,
    get_new,
    post,
    detail_edit,
    put,
    del
}
