import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Link } from 'react-router-dom'
import { CiBoxList } from "react-icons/ci";


const Calender = () => {
    const localizer = momentLocalizer(moment)

    const myEventsList = [
        {
            title:"Test 1",
            start:new Date(2024,6,8),
            end:new Date(2024,6,8)
        },
        {
            title:"Test 2",
            start:new Date(2024,7,9),
            end:new Date(2024,7,9),
            time:"10:00am"
        },
    ]
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
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      popup
    />
  </div>
    </>
    
  )
}

export default Calender

