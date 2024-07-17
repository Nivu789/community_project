import React from 'react'

const GalleryFolderCard = () => {
  return (
    <div className='w-72 h-full flex flex-col text-white gap-2 p-1 text-center bg-red-400 rounded-lg'>
        <div>
            <img src='https://www.rumorcontrol.us/wp-content/uploads/2023/02/the-weekend.jpeg'/>
        </div>
        <div>
            Folder name
        </div>
    </div>
  )
}

export default GalleryFolderCard