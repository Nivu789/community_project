import React from 'react'
import EventInfoCard from '../../components/adminComponents/EventInfoCard'
import { Link } from 'react-router-dom'

const SetEvents = () => {
  return (
    <div className='h-screen text-white p-4 flex flex-col gap-2'>
        <div className='text-4xl'>
            Events
        </div>
        <div className='overflow-auto scroll-m-0 h-3/4 flex flex-col p-3'>
            <EventInfoCard/>
            <EventInfoCard/>
            <EventInfoCard/>
            <EventInfoCard/>
            <EventInfoCard/>
            <EventInfoCard/>
            <EventInfoCard/>
            <EventInfoCard/>
            <EventInfoCard/>
            <EventInfoCard/>
            <EventInfoCard/>
        </div>
        
        <div className='mt-3'>
            <Link to={'/admin/dashboard/host-event'}><button className='bg-green-600 p-3 rounded-lg'>Host an event</button></Link>
        </div>
    </div>
  )
}

export default SetEvents