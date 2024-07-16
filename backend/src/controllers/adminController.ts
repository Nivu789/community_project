import { NextFunction, Request, Response } from "express";
import { convert } from "../helpers/formatDataAndTime";
import EVENT from "../models/eventModel";
import moment from 'moment-timezone';

export const postEvent = async(req:Request,res:Response,next:NextFunction) =>{
    try {
        const {title,description,venue,seats,dates,time} = req.body.eventData
        const startDateIST = moment(dates[0]).tz('Asia/Kolkata').format('YYYY-MM-DD');
        const endDateIST = moment(dates[1]).tz('Asia/Kolkata').format('YYYY-MM-DD');
        const finalDate = [startDateIST,endDateIST]
        console.log("final",finalDate)
        console.log("image location from 2nd route",req.body.imageLocation)
        const formatedDates = convert(finalDate,time)
        const startDate = (formatedDates[0])
        const endDate = (formatedDates[1])
        console.log(formatedDates)
        const postEvent = await EVENT.create({
            title,
            desc:description,
            venue,
            seats,
            startDate,
            endDate,
            img:req.body.imageLocation
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

export const getEventInfo = async(req:Request,res:Response,next:NextFunction) =>{
    try {
        const eventId = req.params.id
        const event = await EVENT.findById({_id:eventId})
        if(event){
            return res.json({eventInfo:event})
        }

        return res.json({error:"Something went wrong while getting event"})
    } catch (error) {
        console.log(error)
    }
}