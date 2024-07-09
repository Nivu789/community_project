import express from 'express'
import { userRouter } from './routes/userRoute'
import connectDatabase from './db/dbConnect'
import cors from 'cors'

const app = express()

app.use(cors({
    origin:'*'
}))

app.use(express.json())

app.use('/user',userRouter)

connectDatabase()



app.get('/',(req,res)=>{
    res.send("Hello world")
})

app.listen(3000,()=>{
    console.log("Server running")
})