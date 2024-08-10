import express from 'express'
import { adminAuth } from '../middlewares/adminAuth'
import { deleteAnnouncement, editAnnouncement, editEventInfo, getAnnouncements, getEventInfo, getEvents, postAnnouncement, postEvent, removeEvent } from '../controllers/adminController'
import { s3Upload } from '../middlewares/s3Upload'
import { NextFunction, Request, Response } from "express";
const { S3Client } = require('@aws-sdk/client-s3')
import multer from 'multer'
import multerS3 from 'multer-s3'
import { listFilesInS3 } from '../middlewares/listFilesInS3';
import { fileUploadS3 } from '../middlewares/fileUploadS3';
import { deleteFileS3 } from '../middlewares/deleteFileS3';




export const adminRouter = express.Router()


adminRouter.post('/post-event',adminAuth,s3Upload,postEvent)

adminRouter.get('/get-events',adminAuth,getEvents)

adminRouter.get('/get-event-info/:id',adminAuth,getEventInfo)

adminRouter.post('/post-edited-event/:id',adminAuth,s3Upload,editEventInfo)

adminRouter.post('/remove-event/:id',adminAuth,removeEvent)

adminRouter.post('/gallery-folders',adminAuth,listFilesInS3)

const s3 = new S3Client({
    region: 'us-east-1',
    credentials: {
        accessKeyId: "AKIA47CR3SDNCC45LOEX",
        secretAccessKey: "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"
    }
})

const upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: 'samskruthibucket',
      metadata: function (req:Request, file, cb) {
        cb(null, Object.assign({}, req.body));
      },
      key: function (req:Request,file:Express.Multer.File, cb:any) {
        console.log(req)
        const folderName = req.body.folderName;
        const rootfolder = req.body.rootFolder
        cb(null, `${rootfolder?rootfolder:'gallery'}/${folderName}/${Date.now().toString()}_${file.originalname}`);
      }
    })
  })

  adminRouter.post('/gallery-upload', upload.array('photos', 3), function(req:Request, res:Response, next:NextFunction) {
    console.log(req.body)
    if(req.files){
        res.send('Successfully uploaded ' + (req.files as Express.Multer.File[]).length + ' files!');
    }else{
        res.status(400).send('No files uploaded.');
    }
  })

  adminRouter.post('/post-announcement',fileUploadS3,postAnnouncement)

  adminRouter.post('/edit-announcement',fileUploadS3,editAnnouncement)

  adminRouter.post('/delete-announcement',deleteFileS3,deleteAnnouncement)


  adminRouter.post('/delete-file',deleteFileS3)

  adminRouter.get('/get-announcements',getAnnouncements)



