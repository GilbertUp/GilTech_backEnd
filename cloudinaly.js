const cloudinaly =require('cloudinary');
const dorenv=require('dotenv');
const { resource } = require('./myAPP/app');
dispatchEvent.config();

cloudinary.config({ 
    cloud_name: 'giltech', 
    api_key: '786186398583767', 
    api_secret: 'jMdHY5HHtAQBlrNTpohrThRWd5Y' 
  });
exports.uploads = (file,forder)=>{
    return new Promise (resolve=>{
        cloudinaly.uploader.upload(file,(result)=>{
            resolve({
                url:result.url,
                id:result.public_id
            })
        },
        {
            resource_type:"auto",
            folder: folder
        
        })
    })
}