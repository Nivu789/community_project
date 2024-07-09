import { Request, Response, NextFunction } from 'express';
import USER from '../models/userModel';
import jwt from 'jsonwebtoken'


export const memberLogin = async(req:Request,res:Response,next: NextFunction) =>{
    try {
        const {phone,password} = req.body.data
        console.log(phone)
        const user = await USER.findOne({phone})
        console.log(user)
        if(user){
            const token = jwt.sign({phone},process.env.JWT_SECRET || "")
            res.json({message:"Welcome back",token:token})
        }else{
            res.json({error:"You are not a member"})
        }
    } catch (error) {
        console.log(error)
    }
}

