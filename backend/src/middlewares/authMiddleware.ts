import { Request,Response,NextFunction } from "express";
import jwt from 'jsonwebtoken'

export const authMiddleware = (req:Request,res:Response,next:NextFunction) =>{
    try {
        const token = req.headers.authorization || ""
        const tokenCheck = jwt.verify(token,process.env.JWT_SECRET || "")
        console.log(tokenCheck)
        if(tokenCheck){
            next()
        }else{
            res.json({error:"Login to access this page"})
        }
    } catch (error) {
        res.json({error:"Login to access this page"})
    }
}