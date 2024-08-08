import React, { useEffect, useState } from 'react'
import { useFetchAnnouncements } from '../../hooks/useFetchAnnouncements'
import moment from 'moment'
import { FaFilePdf } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { MdOutlineReadMore } from "react-icons/md";
import {motion} from 'framer-motion'

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
    <div className='announcement-container lg:h-[700px] flex gap-1 lg:pl-6'>
        <div className='text-xl flex justify-between'>
            <div className='flex'><img src="./loud.gif" className="w-20 h-20 absolute" alt="" /><motion.div className='pl-16 text-blue-700' animate={{scale:1.2}} transition={{duration:1,repeat: Infinity, repeatType: "reverse"}}>Announcements</motion.div></div>
            <Link to={'/allannouncements'}><div className='flex items-center gap-2'>See more<MdOutlineReadMore /></div></Link>
        </div>
        <div className='w-full bg-orange-800 block' >&nbsp;</div>
        {announcementsFromHook && announcementsFromHook.length > 0 ? 
        
        <div>
        {announcementsFromHook && announcementsFromHook.map((item,index)=>(
            <div className={`announcement-item ${isAnimating && index === 0 ? 'slide-out' : 'slide-in'} flex bg-orange-300  border shadow-2xl`} key={item._id}>
                
                <div className='min-w-64 font-semibold w-64'>
                    <div className='max-w-1/2'>{item.title}</div>
                </div>
                <div className='flex flex-col absolute ml-80 w-28 items-center -mt-5 gap-2'>
                    <div className='bg-orange-800 py-2 px-4 flex flex-col items-center w-3/4 text-white'>
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