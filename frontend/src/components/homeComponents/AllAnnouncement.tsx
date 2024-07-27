import React, { useState } from 'react'
import Container from '../Container'
import AnnouncementCard from '../allAnnouncementPage/AnnouncementCard'
import { useFetchAnnouncements } from '../../hooks/useFetchAnnouncements'
import Pagination from '../Pagination'


const AllAnnouncement = () => {
    const [refetch,setRefetch] = useState(false)
    const {announcements} = useFetchAnnouncements({userType:"user",refetch,showAll:true})
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5)

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = announcements.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber:number) =>{
      setCurrentPage(pageNumber)
      console.log(currentPosts)
  }

  const previousPage = () => {
    if (currentPage !== 1) {
       setCurrentPage(currentPage - 1);
    }
 };

 const nextPage = () => {
    if (currentPage !== Math.ceil(announcements.length / postsPerPage)) {
       setCurrentPage(currentPage + 1);
    }

  }

  return (
    <>
    <Container className='h-[600px]'>
        <div className='flex flex-col gap-3 p-2 h-full'>
            {
            currentPosts && currentPosts.length>0 ? currentPosts.map((item)=>(
                <AnnouncementCard data={item}/>
            ))
            :
            <div>No announcements currently</div>
            }
            
        </div>

        
    </Container>
    <Container>
      <Pagination currentPage ={currentPage} postsPerPage={postsPerPage} totalPosts={announcements.length} paginate={paginate} previousPage={previousPage} nextPage={nextPage}/>
    </Container>
      
    </>
    
    
  )
}

export default AllAnnouncement