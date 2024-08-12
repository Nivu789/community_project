import { useEffect, useState } from "react"
import { BASE_URL } from "../config/config"
import axios from "axios"

interface eventType {
    title:string,
    img:string,
    desc:string,
    venue:string,
    startDate:number[]
}

export const useFetchEventsOfActivity = (activityName:string) =>{
    const [eventData,setEventData] = useState<eventType[] | []>([])
    try {
        useEffect(()=>{
            axios.post(`${BASE_URL}/user/get-activity-events`,{activityName}) 
            .then((response)=>{
            if(response.data.success){
                setEventData(response.data.eventData)
            }
        })
        
        },[activityName])
       
    } catch (error) {
        console.log(error)
    }

    return {eventData}
}