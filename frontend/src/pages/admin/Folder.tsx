import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import GalleryFolderCard from '../../components/adminComponents/GalleryFolderCard'
import { useListFilesInGallery } from '../../hooks/useListFilesInGallery'

const Folder = () => {
    const {folderName} = useParams()
    const [refetch,setRefetch] = useState(false)

    const {list,loading} = useListFilesInGallery(refetch,folderName+"/" || "")
    console.log(list)

  return (
    <div className='grid grid-cols-4 gap-60 w-3/4 pt-4 ml-5 h-fit'>
        {list && list.map((item)=>(
            <GalleryFolderCard dir='inFolder' imgSrc={`https://samskruthibucket.s3.amazonaws.com/${item}`}/>
        ))}
    </div>
  )
}

export default Folder