import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import GalleryFolderCard from '../../components/adminComponents/GalleryFolderCard'
import { useListFilesInGallery } from '../../hooks/useListFilesInGallery'
import Pagination from '../../components/Pagination'

const Folder = () => {
    const {folderName} = useParams()
    const [refetch,setRefetch] = useState(false)

    const {list,loading} = useListFilesInGallery(refetch,folderName+"/" || "","",true)
    console.log(list)

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(8)

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost);

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
  if (currentPage !== Math.ceil(list.length / postsPerPage)) {
     setCurrentPage(currentPage + 1);
  }

}

  return (
    <>
    <div className='mt-16 h-screen'>
    <div className='grid lg:grid-cols-4 grid-cols-2 w-full pt-2 h-3/4 px-5 overflow-y-auto'>
        {currentPosts && currentPosts.map((item)=>(
            <GalleryFolderCard dir='inFolder' imgSrc={`https://samskrithibucket.s3.amazonaws.com/${item}`} setRefetch={setRefetch}/>
        ))}
    </div>
    <div>
      <Pagination totalPosts={list.length} postsPerPage={postsPerPage} currentPage={currentPage} paginate={paginate} nextPage={nextPage} previousPage={previousPage}/>
    </div>
    </div>
    </>
  )
}

export default Folder