import React, { useState } from 'react'
import Container from '../Container'
import AnnouncementCard from '../allAnnouncementPage/AnnouncementCard'
import { useFetchAnnouncements } from '../../hooks/useFetchAnnouncements'
import Pagination from '../Pagination'


const AllAnnouncement = () => {
    const [refetch,setRefetch] = useState(false)
    const {announcements} = useFetchAnnouncements({userType:"user",refetch,showAll:true})
    

  return (
    <Container>
        <div className='flex flex-col gap-3'>
            {
            announcements && announcements.length>0 ? announcements.map((item)=>(
                <AnnouncementCard/>
            ))
            :
            <div>No announcements currently</div>
            }
            
        </div>

        <Pagination postsPerPage={5} length={announcements.length}/>
        
    </Container>
    
  )
}

export default AllAnnouncement