import { Response,Request,NextFunction } from "express"
import AWS, { RDS } from 'aws-sdk'
import ANNOUNCEMENT from "../models/announcementModel";

const s3 = new AWS.S3({
    accessKeyId: "AKIA47CR3SDNCC45LOEX",
    secretAccessKey: "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",
    region: 'us-east-1',
    
});



export const deleteFileS3 = (req:Request,res:Response,next:NextFunction) =>{
    try {
        if(req.body.filePath){
            const filePath = req.body.filePath.slice(52,req.body.filePath.length).replace(/%20/g, ' ')
        console.log(filePath)
        s3.deleteObject({Bucket:"samskruthibucket",Key:filePath}, async function(err, data) {
            if (err){ 
                console.log(err, err.stack);
            }
              // error
            else{
                const deleteFile = await ANNOUNCEMENT.updateOne({_id:req.body.id},{$set:{file:""}})
                if(deleteFile){
                    return res.json({success:true})
                }
            }                 // deleted
          }); 
        }else{
            next()
        }
        
    } catch (error) {
        console.log(error)
    }
}