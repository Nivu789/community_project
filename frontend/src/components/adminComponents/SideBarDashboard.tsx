import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowDropdownCircle } from "react-icons/io";

const SideBarDashboard = () => {
    const [displayCommittee,setDisplayCommitte] = useState(false)
    const [displayActivity,setDisplayActivity] = useState(false)

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
                    <Link to={`/admin/dashboard/committee/${'farmers'}`}><li>കർഷക കൂട്ടായ്‌മ</li></Link>
                    <Link to={`/admin/dashboard/committee/${'army'}`}><li>വിമുക്ത ഭട കൂട്ടായ്‌മ</li></Link>
                    <Link to={`/admin/dashboard/committee/${'wemen'}`}><li>വനിത കൂട്ടായ്‌മ</li></Link>
                    <Link to={`/admin/dashboard/committee/${'children'}`}><li>ബാലവേദി</li></Link>
                </ul>
                }
            </div></Link>
            <Link to={'#'}><div className='w-full bg-slate-400 p-4 opacity-70 hover:opacity-100 hover:text-white cursor-pointer'>
                <div className='flex items-center gap-2'> Activity <IoIosArrowDropdownCircle onClick={()=>setDisplayActivity(!displayActivity)}/></div>
                { displayActivity &&
                    <ul className='py-4 bg-slate-600 text-white pl-4 flex flex-col gap-3'>
                    <Link to={`/admin/dashboard/activity/${'batmindon'}`}><li>Batmindon</li></Link>
                    <Link to={`/admin/dashboard/activity/${'karate'}`}><li>Karate</li></Link>
                    <Link to={`/admin/dashboard/activity/${'dance'}`}><li>Dance</li></Link>
                    <Link to={`/admin/dashboard/activity/${'music'}`}><li>Music</li></Link>
                    <Link to={`/admin/dashboard/activity/${'spoken english'}`}><li>Spoken english</li></Link>
                </ul>
                }
            </div></Link>
        </div>
    </div>
  )
}

export default SideBarDashboard