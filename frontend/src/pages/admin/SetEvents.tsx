import { useEffect, useState } from 'react'
import EventInfoCard from '../../components/adminComponents/EventInfoCard'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../../config/config'
import { toast,ToastContainer } from 'react-toastify'
import Swal from "sweetalert2"


const SetEvents = () => {
  
  const [events,setEvents] = useState([])
  const [eventsChanged,setEventsChanged] = useState(false)


  const handleRemoveEvent = (id:string) =>{
    return (event:any) =>{
      console.log("cslled")
      event.preventDefault()
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            axios.post(`${BASE_URL}/admin/remove-event/${id}`,{},{
                headers:{
                    Authorization:localStorage.getItem("adminToken")
                }
            }).then((response)=>{
                console.log(response)
                if(!response.data.error){
                    Swal.fire({
                        title: "Removed!",
                        text: "Event was removed.",
                        icon: "success"
                      });
                      setEventsChanged(!eventsChanged)
                }else{
                    Swal.fire({
                        title: "Error!",
                        text: "Something went wrong",
                        icon: "error"
                      });
                }
            })
          
        }
      });
      
    }
    
}

  useEffect(()=>{
    axios.get(`${BASE_URL}/admin/get-events`,{
      headers:{
        Authorization:localStorage.getItem("adminToken")
      }
    }).then((response)=>{
      setEvents(response.data.events)
    }).catch((err)=>{
      toast.error(err)
    })
    console.log("dwdw")
  },[eventsChanged])

 
  

type Item = {
  _id:string;
  title: string; 
  desc: string; venue: string; 
  seats: string; 
  startDate: []; 
  endDate: []; 
  img: string; 
}

  return (
    <>
    <ToastContainer position="top-right"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      theme="light"
      />
    
    <div className='h-screen text-white p-4 flex flex-col gap-2'>
        <div className='text-4xl'>
            Events
        </div>
        <div className='overflow-auto scroll-m-0 h-3/4 flex flex-col p-3'>
            {events.map((item:Item)=>(
              <EventInfoCard data={item} onClick={handleRemoveEvent(item._id)}/>
            ))}
        </div>
        
        <div className='mt-3'>
            <Link to={'/admin/dashboard/host-event'}><button className='bg-green-600 p-3 rounded-lg'>Host an event</button></Link>
        </div>
    </div>
    </>
  )
}

export default SetEvents