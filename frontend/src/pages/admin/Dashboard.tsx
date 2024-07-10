import React from 'react'
import SideBarDashboard from '../../components/adminComponents/SideBarDashboard'
import SetEvents from './SetEvents'
import { Outlet } from 'react-router-dom'


const Dashboard = () => {
  
  return (
    <div className='grid grid-cols-12 bg-black'>
      <div className='col-span-2'>
        <SideBarDashboard/>
      </div>
      <div className='col-span-10'>
        <Outlet/>
      </div>
    </div>
  )
}

export default Dashboard