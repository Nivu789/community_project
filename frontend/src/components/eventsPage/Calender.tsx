import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Link } from 'react-router-dom'
import { CiBoxList } from "react-icons/ci";
import { useEffect,useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../config/config';



const Calender = () => {
    const localizer = momentLocalizer(moment)
    const [events,setEvents] = useState([])
    useEffect(()=>{
      
        axios.get(`${BASE_URL}/user/events`)
        .then((response)=>{
          const result = response.data.events
          const extractedData = result.map((item:{title:string,startDate:[],endDate:[]})=>({
            title:item.title,
            start:new Date(...item.startDate),
            end:new Date(...item.endDate)
          }))
          console.log(extractedData)
          setEvents(extractedData)
        })
     },[])

  return (
    <>
    <div className='flex lg:justify-end justify-start mt-6 px-3'>
    <div className='flex gap-2 items-center'>
    <CiBoxList className='text-xl'/>
    <Link to='/events'>Switch to list view</Link>
    </div>
    
    </div>
    
    <div className="myCustomHeight h-screen mt-8">
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      popup
    />
  </div>
    </>
    
  )
}

export default Calender

