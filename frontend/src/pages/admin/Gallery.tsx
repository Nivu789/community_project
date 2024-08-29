import React, { ChangeEvent, ChangeEventHandler, FormEvent } from 'react'
import GalleryFolderCard from '../../components/adminComponents/GalleryFolderCard'

import { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../config/config';
import { useListFilesInGallery } from '../../hooks/useListFilesInGallery';
import { TiTick } from "react-icons/ti";
import Pagination from '../../components/Pagination';

const Gallery = () => {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [folderName, setFolderName] = useState("")
  const [isDisabled,setIsDisabled] = useState(false)
  const [refetch,setRefetch] = useState(false)
  const [createdDate,setCreatedDate] = useState("")

  const { list, loading } = useListFilesInGallery(refetch,'')


  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFiles(event.target.files);
    }
  };

  const handleImageSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!selectedFiles || !folderName) return;

    const formData = new FormData();
    formData.append('folderName', folderName);
    formData.append('createdDate',createdDate)
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
      setRefetch(!refetch)
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };

  const handleSelection = (event:ChangeEvent<HTMLSelectElement>) =>{
    if(event.target.value=="" || event.target.value=="Choose an existing folder"){
      setIsDisabled(false)
    }else{
      setIsDisabled(true)
      setFolderName(event.target.value)
    }
  }

  const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6)

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber:number) =>{
      setCurrentPage(pageNumber)
      console.log(currentPosts)
  }

  const previousPage = () => {
    if (currentPage !== 1) {
       setCurrentPage(currentPage - 1);
    }
 }; 

 const nextPage = () => {
  if (currentPage !== Math.ceil(list.length / postsPerPage)) {
     setCurrentPage(currentPage + 1);
  }

}


  return (
    <>
      
      <div className='grid lg:grid-cols-4 w-full mt-16 px-5 grid-cols-1'>

        <div className='col-span-3'>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5 w-full pt-4 col-span-3 h-3/4 overflow-y-auto'>
          {loading || list.length==0 ? <div className='col-span-2 h-96 w-full'>Loading ...</div> : currentPosts && currentPosts.map((item)=>(
            <GalleryFolderCard folderName={item} dir='gallery'/>
          ))}
          
        </div>

        <div className='mt-8'>
          <Pagination postsPerPage={postsPerPage} totalPosts={list.length} paginate={paginate} previousPage={previousPage} currentPage={currentPage} nextPage={nextPage}/>
          </div>

        
          </div>
          
        <div className='col-span-1 bg-slate-900 p-2 flex flex-col gap-2 lg:h-screen max-sm:mt-8 w-full mb-20'>

          <div className='w-full'>
            <form className="max-w-full">
              <label htmlFor="underline_select" className="sr-only">Underline select</label>
              <select onChange={handleSelection} id="underline_select" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                {loading ? (
                  <option>Loading...</option>
                ) : (
                  <>
                    <option>Choose an existing folder</option>
                    {list && list.map((item) => (
                      <option key={item} value={item}>{item}</option>
                    ))}
                  </>
                )}
              </select>
            </form>
          </div>

          <div className='text-center text-xl text-white'>
            OR
          </div>

          <div>
            <div className="relative z-0 w-full mb-5 group">
              <input  disabled={isDisabled} type="text"  onChange={(e) => setFolderName(e.target.value)} name="title" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Create new folder</label>
            </div>
          </div>

          <div>
            <div className='text-white text-xl'>
              Select images
            </div>
            <form className='mt-4 flex flex-col gap-2' onSubmit={handleImageSubmit} encType="multipart/form-data">
              <input type="file" multiple name='photos' onChange={handleFileChange} />
              <input disabled={isDisabled} type="date" value={createdDate} onChange={(e)=>setCreatedDate(e.target.value)}/>
              <button type='submit' className='bg-green-500 flex items-center mt-6 p-2'>Submit<TiTick /></button>
            </form>
          </div>

        </div>
        
      </div>
    </>
  )
}

export default Gallery