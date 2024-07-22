import React from 'react'
import AnnouncementForm from '../../components/adminComponents/AnnouncementForm'
import { useFetchAnnouncements } from '../../hooks/useFetchAnnouncements'
import moment from 'moment'
import { useState } from 'react'

type Announcement = {
    
    title:string,
    description:string,
    published:Date,
    lastDate:Date,
    file:string
    
}

const Announcements = () => {
    const [refetch,setRefetch] = useState(false)
    const {announcements} = useFetchAnnouncements({userType:"admin",refetch:refetch})
    const [editMode,setEditMode] = useState(false)
    const [toBeEdited,setToBeEdited] = useState<Announcement[]>([])
  return (
    <div className='flex flex-col p-4'>
        <div className='text-2xl text-white'>
            Announcements
        </div>

        <div className='grid grid-cols-3'>
            <div className='col-span-2 h-[800px] text-white overflow-scroll p-2 overflow-x-hidden'>
                {announcements.map((item)=>(
                    <div key={item.published.toString()} className='grid grid-cols-2 border-2 p-2 rounded-lg bg-slate-500 my-2'>
                        <div className='flex flex-col border-r-2 gap-2'>
                            <div>Title: {item.title}</div>
                            <div>Description: {item.description.length>40 ? item.description.slice(0,35)+"..." : item.description}</div>
                            <div>Last date : {item.lastDate ? moment(item.lastDate).format("MMM Do YY") : ""}</div>
                        </div>
                        <div className='px-2'>
                            <div className='flex justify-between'>Published: {moment(item.published).format("MMM Do YY")} <div><button onClick={()=>setToBeEdited([item])}>Edit</button></div></div>
                            <div>{item.file}</div>
                        </div>
                    </div>
                ))}
                
            </div>

            <div>
                <AnnouncementForm refetch={setRefetch} dataToBeEdited={toBeEdited?toBeEdited:null}/>
            </div>
        </div>
    </div>
  )
}

export default Announcements