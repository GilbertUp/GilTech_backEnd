import  express  from "express"
import upload from "../multer.js"




// // const app=express();
// // const upload=requare('./multer')
// // const cloudinaly =require ('./cloudinary')
// // const fs=requare ('fs');
app.use(bodyParser.urlencoded)({
    extended:false
})
app.use(bodyParser.json())
app.use('upload-images',upload.array('image'),async(req,res)=>{
    const uploader=async(path)=> await cloudinaly.upload(path,'images');
    if(req.method === 'POST'){
        const urls=[]
        const files=req.files;
        for(const file of files){
            const {path} = await uploader(path)
            urls.push(newPath)
            fs.unlinksync(path)
        }
        res.status(200).json({
            message:'image uploaded successfully',
            data:urls
        })
    }else{
        res.status(405).json({
            err:`${req.method}method not allowed`
        })
    }
})

module.exports=app;

