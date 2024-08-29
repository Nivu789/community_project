import React, { useState } from 'react'
import { useListFilesInGallery } from '../../hooks/useListFilesInGallery'
import Container from '../../components/Container'
import GalleryFolderCard from '../../components/adminComponents/GalleryFolderCard'
import ImageLoading from '../../components/ImageLoading'
import Pagination from '../../components/Pagination'

const MemberGallery = () => {

    const [refetch,setRefetch] = useState(false)

    const {list,loading} = useListFilesInGallery(refetch,"","user")
    console.log(list)

    const [currentPage,setCurrentPage] = useState(1)
    const [postsPerPage] = useState(8)
    
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = list.slice(indexOfFirstPost,indexOfLastPost)

    const paginate = (pageNumber:number) =>{
      setCurrentPage(pageNumber)
    }

    const previousPage = () => {
      if (currentPage !== 1) {
         setCurrentPage(currentPage - 1);
      }
   };
  
   const nextPage = () => {
      if (currentPage !== Math.ceil(list.length / postsPerPage)) {
         setCurrentPage(currentPage + 1);
      }
  
    }
    
  return (
    <Container>
        { loading || currentPosts.length == 0 ? <div className='w-full h-screen px-9 py-12'>
          <ImageLoading/>
        </div> 
        : 
        <div className='grid lg:grid-cols-4 gap-y-3 w-full h-3/4 grid-cols-2 px-3 gap-x-3'>
        {currentPosts && currentPosts.map((item)=>(
          
            <GalleryFolderCard folderName={item} dir='member-gallery' className='relative w-full lg:w-60 h-full flex flex-col text-white gap-2 p-1 text-center bg-black rounded-lg mt-4'/>
          ))}
        </div>
        }
        <div className='mt-20'>
        <Pagination postsPerPage={postsPerPage} currentPage={currentPage} totalPosts={list.length} paginate={paginate} previousPage={previousPage} nextPage={nextPage}/>
        </div>
    </Container>
  )
}

export default MemberGallery