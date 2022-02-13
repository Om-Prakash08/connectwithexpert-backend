const axios=require('axios') ;
require('dotenv').config() ;

const uploadImage=(img)=>{
    let body = new FormData()
    body.set('key', process.env.IMGBB_API_KEY) ;
    body.append('image', img.files[0])
    
    return axios({
      method: 'post',
      url:  process.env.IMGBB_URL,
      data: body
    })
}

module.exports=uploadImage ;