import mongoose from "mongoose";
// import app from "..";

const userSchema=new mongoose.Schema({
    fullName:{
        type:String,
       // required:[true,"this field is required"]
        
    },
    email:{
        type:String,
       
       // trim:true,
        

    }, 
    
    password:{
        type:String,
       // required:[true,"this field is required"],
        //select: false
        
    }, 
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin"],
    },
     
    confirmPassword:{
        type:String,
       //required:[true,"this field is required"],
       

    },
    createdAt:{
        type:Date,
        default:Date.now()     
    },
})


const User=mongoose.model("User",userSchema)
export default User
