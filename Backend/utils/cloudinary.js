import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

const uploadCloudinary = async function (localFilePath) {
    try {

        if (!localFilePath)
            return null;

        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        })

        console.log("file has been uploaded successfully!");

        fs.unlinkSync(localFilePath);
        return response;

    } catch (error) {

        // remove locally saved temporary file as upload operation got failed
        fs.unlinkSync(localFilePath);

        return null;
    }
}

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

export { uploadCloudinary };