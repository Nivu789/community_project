import { NextFunction, Request, Response } from "express";
import AWS from 'aws-sdk'

const s3 = new AWS.S3({
    accessKeyId: "AKIA6LNJWUEZZZSTUHG2",
    secretAccessKey: "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",
    region: 'us-east-1',
    
});

export const listFilesInS3 = (req:Request,res:Response,next:NextFunction) =>{
    try {
        console.log("Working")
        return new Promise ((resolve, reject) => {
            const s3params = {
              Bucket: 'samskrithibucket',
              MaxKeys: 20,
              Delimiter: '/',
              Prefix: 'gallery/'+req.body.prefix
            };
            s3.listObjectsV2 (s3params, (err, data) => {
              if (err) {
                reject (err);
              }
              resolve (data);
              console.log("Data",data)
              if(req.body.prefix==''){
                if(data && data.CommonPrefixes ){
                    const folders = data.CommonPrefixes.map(commonPrefix => {
                        const fullPrefix = commonPrefix.Prefix || "";
                        return fullPrefix.slice(('gallery/'+req.body.prefix).length, -1); // Extract the folder name
                    });
                    console.log("foldres",folders)
                    return res.json({folders})
                  }
              }else{
                if(data && data.Contents ){
                    const folders = data.Contents.map(content => {
                        return content.Key; // Extract the folder name
                    });
                    console.log("Folders",folders)
                    return res.json({folders})
                  }
              }
              
              
            });
          }); 
    } catch (error) {
        console.log(error)
    }
}