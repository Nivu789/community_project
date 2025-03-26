import { NextFunction, Request, Response } from "express";
const { S3Client } = require('@aws-sdk/client-s3')
import multer from 'multer'
import multerS3 from 'multer-s3'

const s3 = new S3Client({
    region: 'us-east-1',
    credentials: {
        accessKeyId: "AKIA6LNJWUEZZZSTUHG2",
        secretAccessKey: "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"
    }
})


const fileUpload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'samskrithibucket',
        metadata: function (req: Request, file, cb) {
            cb(null, Object.assign({}, req.body));
        },
        key: function (req: Request, file: Express.Multer.File, cb: any) {
            console.log("ddsdsd")
            cb(null, `docs/${Date.now().toString()}_${file.originalname}`);
        }
    })
})


export const fileUploadS3 = fileUpload.single('file');