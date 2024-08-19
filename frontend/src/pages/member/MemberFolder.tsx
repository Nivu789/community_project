import  { useState } from 'react'
import { useParams } from 'react-router-dom'
import GalleryFolderCard from '../../components/adminComponents/GalleryFolderCard'
import { useListFilesInGallery } from '../../hooks/useListFilesInGallery'
import Container from '../../components/Container'
import ImageLoading from '../../components/ImageLoading'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Pagination from '../../components/Pagination'

const MemberFolder = () => {
    const {folderName} = useParams()
    const [refetch] = useState(false)

    const {list,loading} = useListFilesInGallery(refetch,folderName+"/" || "","user")
    
    const [currentPage,setCurrentPage] = useState(1)
    const [postsPerPage] = useState(8)
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = list.slice(indexOfFirstPost,indexOfLastPost)

    const paginate = (page:number) =>{
      setCurrentPage(page)
    }

    const previousPage = () =>{
      if(currentPage!==1){
        setCurrentPage(currentPage - 1)
      }
    }

    const nextPage = () =>{
      if(currentPage!=Math.ceil(list.length/postsPerPage)){
        setCurrentPage(currentPage+1)
      }
    }

  return (
    <Container>
    {loading || list.length==0 ? <div className='w-full h-screen px-9 py-12'>
          <ImageLoading/>
        </div> 
        
        : list.length == 0 ? <div className='flex justify-center'>No images in this folder</div>

        :
        
        <div className='grid lg:grid-cols-4 lg:gap-80 lg:w-3/4 pt-4 lg:ml-5 max-sm:grid-cols-1 ml-2 min-h-72 grid-cols-2'>
          <PhotoProvider>
        {currentPosts && currentPosts.map((item,index)=>(
          <>
          <PhotoView key={index} src={`https://samskruthibucket.s3.amazonaws.com/${item}`}>
            <GalleryFolderCard dir='inFolder' imgSrc={`https://samskruthibucket.s3.amazonaws.com/${item}`} className='mx-auto relative w-3/4 lg:w-72 h-40 flex flex-col text-white gap-2 p-1 text-center bg-black rounded-lg mt-4'/>
          </PhotoView>
            </>
        ))}
        </PhotoProvider>
    </div>
    }
    <div className='max-sm:mt-36'>
      <Pagination postsPerPage={postsPerPage} totalPosts={list.length} currentPage={currentPage} paginate={paginate} previousPage={previousPage} nextPage={nextPage}/>
    </div>
    </Container>
  )
}

export default MemberFolder