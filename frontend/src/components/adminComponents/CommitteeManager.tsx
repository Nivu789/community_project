import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { GiConfirmed } from "react-icons/gi";
import axios from 'axios';
import { BASE_URL } from '../../config/config';
import { useFetchCommitteeImages } from '../../hooks/useFetchCommitteeImages';

const CommitteeManager = () => {
    const {committeeName} = useParams()
    const [selectedFiles,setSelectedFiles] = useState<FileList|null>(null)
    const [refetch,setRefetch] = useState(false)

    const {images} = useFetchCommitteeImages(committeeName+'/'||"",refetch)

    const handleSelectedFiles = (event: React.ChangeEvent<HTMLInputElement>) =>{
        if(event.target.files){
            setSelectedFiles(event.target.files)
        }
    }

    const handleImageSubmit = async(event:React.FormEvent) =>{
        event.preventDefault();
    if (!selectedFiles || !committeeName) return;

    const formData = new FormData();
    formData.append('folderName', committeeName);
    formData.append('rootFolder', 'committees');
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


  return (
    <div className='p-3 text-white flex flex-col gap-4 h-screen'>
    <div className='text-4xl'>CommitteeManager - {committeeName}</div>
    <div className='text-2xl'>Image uploads</div>
    <div className='w-full h-3/4 bg-orange-200 overflow-auto p-4 flex flex-wrap gap-y-32 gap-x-6'>
    
    {images && images.length > 0 && images.map((image)=>(
        <div className='w-80 h-60'>
        <img src={`https://samskruthibucket.s3.amazonaws.com/${image}`} alt="" className='object-cover w-full h-full'/>
    </div>
    ))}
        
    </div>

    <div className='flex justify-start w-full p-3 bg-green-500 rounded-lg'>Upload more</div>
    <input type="file" multiple className='bg-red-500 w-fit' onChange={handleSelectedFiles}/>
    <button className='flex justify-start w-fit bg-orange-300 p-2 items-center gap-2' onClick={handleImageSubmit}>Confirm <GiConfirmed className='text-xl'/></button>
    </div>
  )
}

export default CommitteeManager