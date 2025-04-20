import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"

cloudinary.config({ 
    cloud_name:process.env.CLOUDINARY_NAME, 
    api_key: process.env.CLOUDINARY_APIKEY, 
    api_secret: process.env.CLOUDINARY_APISECRET
});
    

const uploadOnCloudinary = async(localFilePath)=>{
    try {
        if(!localFilePath) return null

        const response=await cloudinary.uploader.upload(localFilePath,{resource_type:"auto"})
        console.log("File has been Uploaded Successfully",response.url);
        return response;
        
    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null
        
    }

}

export {uploadOnCloudinary}