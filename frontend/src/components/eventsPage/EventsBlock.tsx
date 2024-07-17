import { Link } from "react-router-dom"
import EventCard from "./EventCard"
import { SlCalender } from "react-icons/sl";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../config/config";


const EventsBlock = () => {

    const [events,setEvents] = useState([])

    useEffect(()=>{
        axios.get(`${BASE_URL}/user/events`)
        .then((response)=>{
            if(response.data.events){
                setEvents(response.data.events)
            }
        })
    },[])

    
  return (
    <>
    <div className="flex lg:justify-end justify-start mt-6 px-3">
        <div className="flex items-center gap-2">
        <SlCalender className="text-xl"/>
        <Link to='event-calender'>Switch to calender view</Link>
        </div>
    
    </div>
    
    {events.map((item)=>(
        <EventCard data={item}/>
    ))}
    </>
    
  )
}

export default EventsBlock