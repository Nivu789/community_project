import express, { Request } from 'express'
import { userRouter } from './routes/userRoute'
import connectDatabase from './db/dbConnect'
import cors from 'cors'
import { adminRouter } from './routes/adminRouter'
import AWS from 'aws-sdk'
import multer from 'multer'



const app = express()
const upload = multer();

app.use(cors({
    origin:'*'
}))

app.use(express.json({limit:'50mb'}))
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use('/user',userRouter)
app.use('/admin',adminRouter)

connectDatabase()

const s3 = new AWS.S3({
    accessKeyId: "AKIA47CR3SDNCC45LOEX",
    secretAccessKey: "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",
    region: 'us-east-1',
    
});


app.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    const file = req.file;

    // Setting up S3 upload parameters
    const uploadParams = {
        Bucket: 'samskruthibucket', // Bucket into which you want to upload file
        Key: file.originalname, // File name you want to save as in S3
        Body: file.buffer, // File buffer
        ContentType: file.mimetype // Content type
    };

    // Uploading files to the bucket
    s3.upload(uploadParams, (err:any, data:any) => {
        if (err) {
            console.log("Error", err);
            return res.status(500).send(err);
        }
        console.log("Upload Success", data.Location);
        res.status(200).send(`File uploaded successfully. ${data.Location}`);
    });
});


app.get('/',(req,res)=>{
    res.send("Hello world")
})

app.listen(3000,()=>{
    console.log("Server running")
})