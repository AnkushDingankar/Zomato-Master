import AWS from "aws-sdk";

//AWS S3 Bucket config
const s3Bucket = new AWS.S3({
    accessKeyId:"",
    secretAccessKey:"",
    region:"ap-south-1"
})

export const s3Upload = (Options) => {
    return new Promise((resolve,reject)=> 
        s3Bucket.upload(Options,(error,data)=>{
            if(error) return reject(error);
            return resolve(data);
        })
    )
}
