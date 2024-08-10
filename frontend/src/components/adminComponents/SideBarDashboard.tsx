import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowDropdownCircle } from "react-icons/io";

const SideBarDashboard = () => {
    const [displayCommittee,setDisplayCommitte] = useState(false)

  return (
    <div className='h-screen bg-gray-700 pt-4'>
        <div className='flex flex-col gap-3'>
            <Link to={'/admin/dashboard/events'}><div className='w-full bg-slate-400 p-4 opacity-80 hover:opacity-100 hover:text-white cursor-pointer'>
                Events
            </div></Link>
            <Link to={'/admin/dashboard/gallery'}><div className='w-full bg-slate-400 p-4 opacity-70 hover:opacity-100 hover:text-white cursor-pointer'>
                Gallery
            </div></Link>
            <Link to={'/admin/dashboard/announcements'}><div className='w-full bg-slate-400 p-4 opacity-70 hover:opacity-100 hover:text-white cursor-pointer'>
                Announcements
            </div></Link>
            <Link to={'#'}><div className='w-full bg-slate-400 p-4 opacity-70 hover:opacity-100 hover:text-white cursor-pointer'>
                <div className='flex items-center gap-2'> Committee <IoIosArrowDropdownCircle onClick={()=>setDisplayCommitte(!displayCommittee)}/></div>
                { displayCommittee &&
                    <ul className='py-4 bg-slate-600 text-white pl-4 flex flex-col gap-3'>
                    <Link to={`/admin/dashboard/committee/${'farmers'}`}><li>Farmers</li></Link>
                    <li>Army</li>
                </ul>
                }
            </div></Link>
        </div>
    </div>
  )
}

export default SideBarDashboard