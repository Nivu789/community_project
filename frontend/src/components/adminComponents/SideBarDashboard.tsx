import React from 'react'
import { Link } from 'react-router-dom'

const SideBarDashboard = () => {
  return (
    <div className='h-screen bg-gray-700 pt-4'>
        <div className='flex flex-col gap-3'>
            <Link to={'/admin/dashboard/events'}><div className='w-full bg-slate-400 p-4 opacity-80 hover:opacity-100 hover:text-white cursor-pointer'>
                Events
            </div></Link>
            <div className='w-full bg-slate-400 p-4 opacity-70 hover:opacity-100 hover:text-white cursor-pointer'>
                Gallery
            </div>
        </div>
    </div>
  )
}

export default SideBarDashboard