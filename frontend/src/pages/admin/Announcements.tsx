import React from 'react'
import AnnouncementForm from '../../components/adminComponents/AnnouncementForm'
import { useFetchAnnouncements } from '../../hooks/useFetchAnnouncements'
import moment from 'moment'
import { useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { MdEditOff } from "react-icons/md";
import { IoTrashBin } from "react-icons/io5";
import Swal from 'sweetalert2'
import axios from 'axios'
import { BASE_URL } from '../../config/config'


type AnnouncementProp = {
    
    title:string,
    description:string,
    published:Date,
    lastDate:Date,
    file:File,
    _id:string,
    showInHome:boolean
    
}

const Announcements = () => {
    const [refetch,setRefetch] = useState(false)
    const {announcements} = useFetchAnnouncements({userType:"admin",refetch:refetch})
    const [toBeEdited,setToBeEdited] = useState<AnnouncementProp[] | null>([])
    const [editMode,setEditMode] = useState(false)

    const handleDeleteAnnouncement = (itemId:string) =>{
        Swal.fire({
            title: "Do you really want to remove the announcement?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Yes",
            denyButtonText: `No`
          }).then((result) => {
            if (result.isConfirmed) {
              
                axios.post(`${BASE_URL}/admin/delete-announcement`,{id:itemId,deleteWhole:true})
                .then((response)=>{
                    if(response.data.success){
                        Swal.fire("Done!", "", "success");
                        setRefetch(!refetch)
                    }else{
                        Swal.fire("Changes are not saved");
                    }
                })

            } else if (result.isDenied) {
              Swal.fire("Changes are not saved", "", "info");
            }
          });
    }

  return (
    <div className='flex flex-col p-4'>
        <div className='text-2xl text-white'>
            Announcements
        </div>

        <div className='grid grid-cols-3'>
            <div className='col-span-2 h-[800px] text-white overflow-scroll p-2 overflow-x-hidden'>
                {announcements.map((item)=>(
                    <div key={item.published.toString()} className='grid grid-cols-2 border-2 p-2 rounded-lg bg-slate-500 my-2'>
                        <div className='flex flex-col border-r-2 gap-2'>
                            <div>Title: {item.title}</div>
                            <div>Description: {item.description.length>40 ? item.description.slice(0,35)+"..." : item.description}</div>
                            <div>Last date : {item.lastDate ? moment(item.lastDate).format("MMM Do YY") : ""}</div>
                        </div>
                        <div className='px-2'>
                            <div className='flex justify-between'>Published: {moment(item.published).format("MMM Do YY")} 
                                <div className='flex gap-5'>
                                <div>
                                    {toBeEdited && toBeEdited[0]?._id == item?._id && editMode ? <MdEditOff onClick={()=>{setEditMode(false);setToBeEdited(null)}}/> : <FaEdit className="cursor-pointer" onClick={()=>{setToBeEdited([item]);setEditMode(true)}}/>}
                                </div>
                                <div>
                                    <IoTrashBin className='cursor-pointer' onClick={()=>handleDeleteAnnouncement(item?._id)}/>
                                </div>
                                </div>
                            </div>
                            
                            <div>{item.file.toString().length>80?item.file.toString().slice(0,80):item.file.toString()}</div>
                        </div>
                    </div>
                ))}
                
            </div>

            <div>
                <AnnouncementForm refetch={setRefetch} dataToBeEdited={toBeEdited?toBeEdited:null}/>
            </div>
        </div>
    </div>
  )
}

export default Announcements