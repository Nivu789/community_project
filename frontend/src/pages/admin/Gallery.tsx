import React, { FormEvent } from 'react'
import GalleryFolderCard from '../../components/adminComponents/GalleryFolderCard'
import { MdOutlineCloudUpload } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../config/config';

const Gallery = () => {
    const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
    const [folderName,setFolderName] = useState("")

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
          setSelectedFiles(event.target.files);
        }
      };

     const handleImageSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!selectedFiles || !folderName) return;

    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append('photos', selectedFiles[i]);
    }
    formData.append('folderName', folderName);

    try {
        console.log(formData)
      const response = await axios.post(`${BASE_URL}/admin/gallery-upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };

    return (
        <>
            {/* <Link to={'/admin/dashboard/upload'}><div className='flex justify-end px-8 pt-4'><button className='bg-slate-500 p-2 flex gap-2 items-center rounded-md hover:text-white'><MdOutlineCloudUpload />
    Upload images/videos</button></div></Link> */}
            <div className='grid grid-cols-4 w-full'>


                <div className='grid grid-cols-3 gap-10 w-full pt-4 col-span-3  ml-10'>
                    <GalleryFolderCard />
                    <GalleryFolderCard />
                    <GalleryFolderCard />
                    <GalleryFolderCard />
                    <GalleryFolderCard />
                    <GalleryFolderCard />
                    <GalleryFolderCard />
                    <GalleryFolderCard />
                </div>

                <div className='col-span-1 bg-slate-900 p-2 flex flex-col gap-2'>
                    
                    <div>
                    <form className="max-w-sm mx-auto">
                        <label htmlFor="underline_select" className="sr-only">Underline select</label>
                        <select id="underline_select" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                            <option selected>Choose an existing folder</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </form>
                    </div>
                    
                    <div className='text-center text-xl text-white'>
                        OR
                    </div>

                    <div>
                    <div className="relative z-0 w-full mb-5 group">
                    <input type="text" value={folderName} onChange={(e)=>setFolderName(e.target.value)} name="title" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Create new folder</label>
                    </div>  
                    </div>

                    <div>
                        <div className='text-white text-xl'>
                            Select images
                        </div>
                        <form className='mt-4' onSubmit={handleImageSubmit} encType="multipart/form-data">
                            <input type="file" multiple name='photos' onChange={handleFileChange} />
                            <button type='submit'>Submit</button>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Gallery