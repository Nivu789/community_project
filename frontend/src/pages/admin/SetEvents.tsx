import { useEffect, useState } from 'react'
import EventInfoCard from '../../components/adminComponents/EventInfoCard'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../../config/config'
import { toast,ToastContainer } from 'react-toastify'

const SetEvents = () => {
  
  const [events,setEvents] = useState([])

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
  },[events])

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
            {events.map((item)=>(
              <EventInfoCard data={item}/>
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