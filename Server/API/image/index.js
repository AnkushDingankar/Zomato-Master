//Libraries
import  Express  from "express";
import AWS from "aws-sdk";
import multer from "multer";


//model

import { ImageModel} from "../../Database/AllModels";
import { error } from "pdf-lib";

//Utilities
import { s3Upload } from "../../Utils/AWS/S3";

const Router = Express.Router();

//Multer config
const storage = multer.memoryStorage();
const upload = multer({storage})
    

//AWS S3 Bucket config

/*
Route : /
Descrp : uploading images to s3 bucket,and saving the file to mongodb
Params :None
Access : Public
Method :- POST
*/

Router.post("/",upload.single("file"),async(req,res)=>{
    try {
        const file = req.file;
        
        //S3 bucket options
        const bucketOptions = {
            Bucket :"shapeaijulybatch01",
            Key : file.originalname,
            Body: file.buffer,
            ContentType:file.mimetype,
            ACL:"public-read"

        };

        const uploadImage = await s3Upload(bucketOptions);
        return res.json({uploadImage})
    } catch (error) {
        return res.status(500).json({error:error.message});
        
    }
})

export default Router;

