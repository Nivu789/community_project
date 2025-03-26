import { useState } from 'react'
import { useParams } from 'react-router-dom'
import GalleryFolderCard from '../../components/adminComponents/GalleryFolderCard'
import { useListFilesInGallery } from '../../hooks/useListFilesInGallery'
import Container from '../../components/Container'
import ImageLoading from '../../components/ImageLoading'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Pagination from '../../components/Pagination'

const MemberFolder = () => {
  const { folderName } = useParams()
  const [refetch] = useState(false)

  const { list, loading } = useListFilesInGallery(refetch, folderName + "/" || "", "user",true)
  console.log(list)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(8)
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (page: number) => {
    setCurrentPage(page)
  }

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const nextPage = () => {
    if (currentPage != Math.ceil(list.length / postsPerPage)) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <Container>
      {loading || list.length == 0 ? <div className='w-full h-screen px-9 py-12'>
        <ImageLoading />
      </div>

        : list.length == 0 ? <div className='flex justify-center'>No images in this folder</div>

          :

          <div className='grid lg:grid-cols-4 lg:gap-y-3 lg:w-full pt-4 lg:mx-auto max-sm:grid-cols-1 ml-2 lg:h-full grid-cols-2'>
            <PhotoProvider>
              {currentPosts && currentPosts.map((item) => (
                <>

                    <div className="mx-auto relative lg:w-64 lg:h-64 flex flex-col text-white gap-1 p-1 text-center bg-black rounded-lg mt-4 md:w-52">
                        <div className='w-full h-full'>
                          <PhotoView key={`https://samskrithibucket.s3.amazonaws.com/${item}`} src={`https://samskrithibucket.s3.amazonaws.com/${item}`}>
                            <img className="object-cover object-center w-full h-full bg-white" src={`https://samskrithibucket.s3.amazonaws.com/${item}`} />
                          </PhotoView>
                        </div>
                    </div>

                    
                  
                </>
              ))}
            </PhotoProvider>
          </div>
      }
      <div className='max-sm:mt-36 sticky mt-36'>
        <Pagination postsPerPage={postsPerPage} totalPosts={list.length} currentPage={currentPage} paginate={paginate} previousPage={previousPage} nextPage={nextPage} />
      </div>
    </Container>
  )
}

export default MemberFolder