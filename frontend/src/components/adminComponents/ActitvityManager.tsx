import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import { BASE_URL } from '../../config/config'
import { IoIosCloseCircle } from "react-icons/io";
import { GiConfirmed } from "react-icons/gi";
import { useFetchActivityImages } from '../../hooks/useFetchActivityImages'



const ActitvityManager = () => {
    const {activityName} = useParams()
    const [selectedFiles,setSelectedFiles] = useState<FileList|null>(null)
    const [refetch,setRefetch] = useState(false)

    const {images,loading} = useFetchActivityImages(activityName+'/'||"",refetch,activityName||"")

    const handleSelectedFiles = (event: React.ChangeEvent<HTMLInputElement>) =>{
        if(event.target.files){
            setSelectedFiles(event.target.files)
        }
    }

    const handleImageSubmit = async(event:React.FormEvent) =>{
        event.preventDefault();
    if (!selectedFiles || !activityName) return;

    const formData = new FormData();
    formData.append('folderName', activityName);
    formData.append('rootFolder', 'activity');
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append('photos', selectedFiles[i]);
    }

    try {
      console.log(formData)
      const response = await axios.post(`${BASE_URL}/admin/gallery-upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      setRefetch(prev=>!prev)
    } catch (error) {
      console.error('Error uploading files:', error);
    }
}

  const handleDeleteFile = (imagePath:string) =>{
    try {
      if(images.length<=2){
        Swal.fire("It is recommended to keep atleast 2 images , changes not saved")
        return;
      }
      Swal.fire({
        title: "Do you want to delete the image?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Yes",
        denyButtonText: `No`
      }).then((result) => {
        if (result.isConfirmed) {
          axios.post(`${BASE_URL}/admin/delete-committee-image`,{committeeFile:imagePath})
          .then((response)=>{
            if(response.data.success){
              Swal.fire("Success")
              setRefetch(prev=>!prev)
            }else{
              Swal.fire("Changes are not saved");
              
            }
          })
        } else if (result.isDenied) {
            Swal.fire("Changes are not saved");
        }
    });
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='h-screen mt-14 flex flex-col'>
    
        <div className='text-4xl text-white'>Activity Manager - {activityName}</div>
        <div className='text-2xl text-white'>Image uploads</div>
    <div className='w-full h-3/4 bg-slate-500 overflow-y-auto p-4 flex flex-wrap gap-y-2 gap-x-6 justify-center'>
    
    {loading && images.length==0 && <div role="status" className='w-full justify-center flex h-full items-center'>
    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span className="sr-only">Loading...</span>
</div>}
    {!loading && images && images.length > 0 && images.map((image)=>(
        <div className='w-80 h-60 flex relative'>
        <img src={`https://samskruthibucket.s3.amazonaws.com/${image}`} alt="" className='z-0 object-cover w-full h-full'/>
        <IoIosCloseCircle className='absolute top-2 right-2 z-10 text-red-500 text-4xl cursor-pointer' onClick={()=>handleDeleteFile(image)}/>
    </div>
    ))}
        
    </div>

    <div className='flex justify-start w-full p-3 bg-green-500 rounded-lg'>Upload more</div>
    <input type="file" multiple className='bg-red-500 w-fit' onChange={handleSelectedFiles}/>
    <button className='flex justify-start w-fit bg-orange-300 p-2 items-center gap-2' onClick={handleImageSubmit}>Confirm <GiConfirmed className='text-xl'/></button>
    
    </div>
  )
}

export default ActitvityManager