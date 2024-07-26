import React, { useEffect, useState } from 'react'
import { useFetchAnnouncements } from '../../hooks/useFetchAnnouncements'
import moment from 'moment'
import { FaFilePdf } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { MdOutlineReadMore } from "react-icons/md";

type Announcement = {
    
    title:string,
    description:string,
    published:Date,
    lastDate:Date,
    file:File
    _id:string,
    showInHome:boolean
    
}


const Announcement = () => {

    const {announcements} = useFetchAnnouncements({userType:"user"})

    const [announcementsFromHook, setAnnouncementsFromHook] = useState<Announcement[]>([])
    const [isAnimating, setIsAnimating] = useState(false);


    useEffect(() => {
        setAnnouncementsFromHook(announcements);
      }, [announcements]);

    
      useEffect(()=>{
            if(announcementsFromHook && announcementsFromHook.length>6){
            const interval = setInterval(() => {
                setIsAnimating(true);
                setTimeout(() => {
                    setAnnouncementsFromHook(prevAnnouncements => {
                        const updatedAnnouncements = [...prevAnnouncements];
                        const first = updatedAnnouncements.shift();
                        if (first) {
                            updatedAnnouncements.push(first);
                        }
                        return updatedAnnouncements;
                    });
                    setIsAnimating(false);
                }, 100);
                // Match this duration with the CSS animation duration
            }, 4000);
            
            
            return (()=>clearInterval(interval))
        }
        },[announcementsFromHook])
    

  return (
    <div className='announcement-container lg:h-[700px] flex gap-1 pl-6'>
        <div className='text-xl flex justify-between'>
            <div>Announcements</div>
            <Link to={'/allannouncements'}><div className='flex items-center gap-2'>See more<MdOutlineReadMore /></div></Link>
        </div>
        <span className='w-full bg-blue-500 block'>&nbsp;</span>
        {announcementsFromHook && announcementsFromHook.length > 0 ? 
        
        <div>
        {announcementsFromHook && announcementsFromHook.map((item,index)=>(
            <div className={`announcement-item ${isAnimating && index === 0 ? 'slide-out' : 'slide-in'} flex bg-blue-200  border shadow-2xl`} key={item._id}>
                
                <div className='min-w-64'>
                    <div className='max-w-1/2'>{item.title}</div>
                </div>
                <div className='flex flex-col absolute ml-80 w-28 items-center -mt-5 gap-2'>
                    <div className='bg-blue-400 py-2 px-4 flex flex-col items-center w-3/4'>
                        <div>{moment(item.lastDate).format('MMM')}<hr></hr></div>
                        
                        <div>{moment(item.lastDate).format('DD')}</div>
                    </div>
                </div>
                {item.file && <div><a href="http://" className='text-sm'><FaFilePdf className='text-red-600'/>Click here</a></div>}
            </div>
        ))}
        </div>
        :
        <div className='flex bg-blue-100 h-full items-center justify-center'>
            <div className='text-xl'>
                No anouncements currently
            </div>
        </div>
    }
    </div>
  )
}

export default Announcement