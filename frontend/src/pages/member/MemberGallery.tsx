import React, { useState } from 'react'
import { useListFilesInGallery } from '../../hooks/useListFilesInGallery'
import Container from '../../components/Container'
import GalleryFolderCard from '../../components/adminComponents/GalleryFolderCard'

const MemberGallery = () => {

    const [refetch,setRefetch] = useState(false)

    const {list,loading} = useListFilesInGallery(refetch,"","user")
    console.log(list)
  return (
    <Container>
        <div className='grid grid-cols-4 gap-6 w-full pt-4 ml-10 h-fit'>
        {list && list.map((item)=>(
            <GalleryFolderCard folderName={item} dir='member-gallery' className='relative w-72 h-full flex flex-col text-white gap-2 p-1 text-center bg-black rounded-lg mt-4'/>
          ))}
        </div>
    </Container>
  )
}

export default MemberGallery