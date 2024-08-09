import  { useState } from 'react'
import { useParams } from 'react-router-dom'
import GalleryFolderCard from '../../components/adminComponents/GalleryFolderCard'
import { useListFilesInGallery } from '../../hooks/useListFilesInGallery'
import Container from '../../components/Container'
import ImageLoading from '../../components/ImageLoading'
import { PhotoProvider, PhotoView } from 'react-photo-view';

const MemberFolder = () => {
    const {folderName} = useParams()
    const [refetch,setRefetch] = useState(false)

    const {list,loading} = useListFilesInGallery(refetch,folderName+"/" || "","user")
    console.log(list)

  return (
    <Container>
    {loading || list.length==0 ? <div className='w-full h-screen px-9 py-12'>
          <ImageLoading/>
        </div> 
        
        : list.length == 0 ? <div className='flex justify-center'>No images in this folder</div>

        :
        
        <div className='grid lg:grid-cols-4 lg:gap-60 lg:w-3/4 pt-4 lg:ml-5 h-fit grid-cols-2 ml-2'>
          <PhotoProvider>
        {list && list.map((item,index)=>(
          <>
          {console.log(item)}
          <PhotoView key={index} src={`https://samskruthibucket.s3.amazonaws.com/${item}`}>
            <GalleryFolderCard dir='inFolder' imgSrc={`https://samskruthibucket.s3.amazonaws.com/${item}`} className='relative w-56 lg:w-72 h-40 flex flex-col text-white gap-2 p-1 text-center bg-black rounded-lg mt-4'/>
          </PhotoView>
            </>
        ))}
        </PhotoProvider>
    </div>
    }
    </Container>
  )
}

export default MemberFolder