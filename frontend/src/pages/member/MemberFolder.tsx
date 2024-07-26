import  { useState } from 'react'
import { useParams } from 'react-router-dom'
import GalleryFolderCard from '../../components/adminComponents/GalleryFolderCard'
import { useListFilesInGallery } from '../../hooks/useListFilesInGallery'
import Container from '../../components/Container'

const MemberFolder = () => {
    const {folderName} = useParams()
    const [refetch,setRefetch] = useState(false)

    const {list,loading} = useListFilesInGallery(refetch,folderName+"/" || "","user")
    console.log(list)

  return (
    <Container>
    <div className='grid grid-cols-4 gap-60 w-3/4 pt-4 ml-5 h-fit'>
        {list && list.map((item)=>(
            <GalleryFolderCard dir='inFolder' imgSrc={`https://samskruthibucket.s3.amazonaws.com/${item}`} className='relative w-72 h-40 flex flex-col text-white gap-2 p-1 text-center bg-black rounded-lg mt-4'/>
        ))}
    </div>
    </Container>
  )
}

export default MemberFolder