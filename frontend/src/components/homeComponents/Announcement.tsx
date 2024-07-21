import React, { useEffect, useState } from 'react'

const Announcement = () => {
    const initialAnnouncements  = [
        {
            id:0,
            title:"Announcement 0"
        },
        {
            id:1,
            title:"Announcement 1"
        },
        {
            id:2,
            title:"Announcement 2"
        },
        {
            id:3,
            title:"Announcement 3"
        },
        {
            id:4,
            title:"Announcement 4"
        },
        {
            id:5,
            title:"Announcement 5"
        },
        {
            id:6,
            title:"Announcement 6"
        },
        {
            id:7,
            title:"Announcement 7"
        },
        {
            id:8,
            title:"Announcement 8"
        },
        {
            id:9,
            title:"Announcement 9"
        },
        
    ]

    const [announcements, setAnnouncements] = useState(initialAnnouncements)
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(()=>{
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setAnnouncements(prevAnnouncements => {
                    const updatedAnnouncements = [...prevAnnouncements];
                    const first = updatedAnnouncements.shift();
                    if (first) {
                        updatedAnnouncements.push(first);
                    }
                    return updatedAnnouncements;
                });
                setIsAnimating(false);
            }, 100); // Match this duration with the CSS animation duration
        }, 4000);

        return (()=>clearInterval(interval))
    },[])

  return (
    <div className='announcement-container lg:h-[700px] overflow-hidden flex gap-1'>
        {announcements.map((item,index)=>(
            <div className={`announcement-item ${isAnimating && index === 0 ? 'slide-out' : 'slide-in'} bg-blue-200  border shadow-2xl`} key={item.id}>
                {item.title}
            </div>
        ))}
        
    </div>
  )
}

export default Announcement