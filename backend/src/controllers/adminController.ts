import { NextFunction, Request, Response } from "express";
import { convert } from "../helpers/formatDataAndTime";
import EVENT from "../models/eventModel";

export const postEvent = async(req:Request,res:Response,next:NextFunction) =>{
    try {
        const {title,description,venue,seats,dates,time} = req.body.eventData
        const formatedDates = convert(dates,time)
        const startDate = (formatedDates[0])
        const endDate = (formatedDates[1])
        console.log(formatedDates)
        const postEvent = await EVENT.create({
            title,
            desc:description,
            venue,
            seats,
            startDate,
            endDate
        })

        if(postEvent){
            res.json({message:"Event hosted"})
        }else{
            res.json({error:"Coudn't host the event"})
        }

    } catch (error) {   
        console.log(error)
    }
}

export const getEvents = async(req:Request,res:Response,next:NextFunction) =>{
    try {
        const eventList = await EVENT.find({})
        if(eventList){
            res.json({events:eventList})
        }else{
            res.json([])
        }
    } catch (error) {
        console.log(error)
    }
}