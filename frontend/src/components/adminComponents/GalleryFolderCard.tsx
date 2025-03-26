
import { Link } from 'react-router-dom'
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { MdDelete } from "react-icons/md";
import axios from 'axios';
import { BASE_URL } from '../../config/config';
import { Dispatch, SetStateAction } from 'react';
import { IoIosCloseCircle } from "react-icons/io";

type GalleryFolderCardProps = {
  folderName?:string,
  dir:string
  imgSrc?:string,
  className?:string
  setRefetch?:Dispatch<SetStateAction<boolean>>
}

const GalleryFolderCard = ({folderName,dir,imgSrc,className,setRefetch}:GalleryFolderCardProps) => {
  console.log("folder yey",folderName)
  console.log(dir)

  const linkTo = dir === "gallery" 
    ? `/admin/dashboard/gallery/${folderName}` 
    : dir === 'member-gallery' 
    ? `/gallery/${folderName}` 
    : "#";

    const handleFolderDelete = async(folderName:string) =>{
      try {
        const response = await axios.delete(`${BASE_URL}/admin/delete-folder`,{
          data:{
            folderName
          }
        })
        if(response.data.success){
          alert(response.data.message)
          console.log(setRefetch)
          setRefetch && setRefetch((prev)=>!prev)
        }
      } catch (error) {
        console.log("Error deleting folder",error)
      }
    }

    const handleFileDelete = async(imgSrc:string) =>{
      try {
        const response = await axios.post(`${BASE_URL}/admin/delete-file`,{
          data:{
            imgPath:imgSrc
          }
        })
        if(response.data.success){
          alert(response.data.message)
          console.log(setRefetch)
          setRefetch && setRefetch((prev)=>!prev)
        }else{
          alert(response.data.message)
        }
      } catch (error) {
        console.log("Error deleting file",error)
      }
    }

  return (
    dir=="member-gallery" ? <Link to={linkTo}><div className={className ? className :' bg-red-600 relative w-40 h-40 lg:w-72 lg:h-40 flex flex-col text-white gap-2 p-1 text-center  rounded-lg mt-4'}>
        <PhotoProvider>
        <div className='w-full h-full'>
          <PhotoView key={imgSrc} src={imgSrc}>
            <img className="object-cover object-center w-full h-full bg-white" src={imgSrc ? imgSrc :'/logo.png'}/>
            </PhotoView>
        </div>
        </PhotoProvider>
        <div className='bg-orange-800 flex p-1 justify-center'>
            <span>{folderName}</span>
            
        </div>
        
    </div></Link> : 
    
    <div className='flex flex-col'>
      <Link to={linkTo}><div className={className ? className :'items-center justify-center  relative w-40 h-40 lg:w-72 lg:h-40 flex flex-col text-white gap-2 p-1 text-center  rounded-lg mt-4'}>
        <PhotoProvider className='w-full h-full'>
        <div className='w-full h-full flex justify-center items-center'>
        
          <PhotoView key={imgSrc} src={imgSrc}>
            
            <img className="object-cover object-center w-full h-full bg-white" src={imgSrc ? imgSrc :'/logo.png'}/>
            
            </PhotoView>
        </div>
        </PhotoProvider>
        {dir !=="gallery" && <div className='absolute top-3 right-3' onClick={()=>handleFileDelete(imgSrc || "")}><IoIosCloseCircle className='text-2xl text-red-600'/></div>}
           
        
        
    </div></Link>
    {dir=="gallery" && <div className='bg-orange-800 text-white flex justify-between p-1 w-40 lg:w-72'>
            <span>{folderName}</span>
            <MdDelete onClick={()=>handleFolderDelete(folderName || "")}/>
        </div>}
    </div>)}


export default GalleryFolderCard