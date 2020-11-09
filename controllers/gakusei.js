const list = (req,res)=>{
    console.log("gakusei list");
}

const get_new =(req,res)=>{
    console.log('new gakusei form');
}

const post = (req,res)=>{
    console.log('post new gakusei');
}

const detail_edit = (req,res)=>{
    console.log('gakusei detail and edit')
}

const put = (req,res)=>{
    console.log('edit gakusei')
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
