import { Link } from "react-router-dom"
import EventCard from "./EventCard"
import { SlCalender } from "react-icons/sl";


const EventsBlock = () => {

    const events = [
        {
            title:"Event 1",
            desc:"sdkdfsflskvdvsinsvjksvlvndsvlnsvnsnvjsnvnsvihvlsvnsilvnlskvsjvnsvjisvlsnvnenvlsnvonvsjvsnv",
            img:"https://socialclub-ocrelys.wildapricot.org/resources/Pictures/Exclusive%20Events/Social-Club-Exclusive-Events-Dinner-Out-Ocrelys-Wild-Apricot.jpg"
        },
        {
            title:"Event 1",
            desc:"sdkdfsflskvdvsinsvjksvlvndsvlnsvnsnvjsnvnsvihvlsvnsilvnlskvsjvnsvjisvlsnvnenvlsnvonvsjvsnv",
            img:"https://socialclub-ocrelys.wildapricot.org/resources/Pictures/Exclusive%20Events/Social-Club-Exclusive-Events-Dinner-Out-Ocrelys-Wild-Apricot.jpg"
        }
    ]
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