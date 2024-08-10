import { Link } from "react-router-dom"
import EventCard from "./EventCard"
import { SlCalender } from "react-icons/sl";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../config/config";
import Pagination from "../Pagination";


const EventsBlock = () => {

    const [events,setEvents] = useState([])

    const [currentPage,setCurrentPage] = useState(1)
    const [postsPerPage] = useState(5)
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = events.slice(indexOfFirstPost,indexOfLastPost)

    const paginate = (page:number) =>{
      setCurrentPage(page)
    }

    const previousPage = () =>{
      if(currentPage!==1){
        setCurrentPage(currentPage - 1)
      }
    }

    const nextPage = () =>{
      if(currentPage!=Math.ceil(events.length/postsPerPage)){
        setCurrentPage(currentPage+1)
      }
    }


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
    <div className="px-3">
    <div className="flex lg:justify-end justify-start mt-6 px-3">
        <div className="flex items-center gap-2">
        <SlCalender className="text-xl"/>
        <Link to='event-calender'>Switch to calender view</Link>
        </div>
    
    </div>
    
    {currentPosts.map((item)=>(
        <EventCard data={item}/>
    ))}
    </div>
    <div className="mt-12">
        <Pagination postsPerPage={postsPerPage} currentPage={currentPage} totalPosts={events.length} paginate={paginate} previousPage={previousPage} nextPage={nextPage}/>
    </div>
    </>
    
  )
}

export default EventsBlock