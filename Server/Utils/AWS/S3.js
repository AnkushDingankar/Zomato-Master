import AWS from "aws-sdk";

//AWS S3 Bucket config
const s3Bucket = new AWS.S3({
    accessKeyId:"AKIAZ5EELIGWU2MRU6JH",
    secretAccessKey:"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",
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