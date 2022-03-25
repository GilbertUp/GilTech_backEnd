import cloudinary from "cloudinary";
import dotenv from "dotenv";

dotenv.config({
    path:"../config.env"
})


cloudinary.config({ 
    cloud_name: 'giltech', 
    api_key: '786186398583767', 
    api_secret: 'jMdHY5HHtAQBlrNTpohrThRWd5Y' 
  });
export default cloudinary