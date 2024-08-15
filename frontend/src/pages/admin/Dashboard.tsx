import React from 'react'
import SideBarDashboard from '../../components/adminComponents/SideBarDashboard'
import SetEvents from './SetEvents'
import { Outlet } from 'react-router-dom'
import MobileDropDown from '../../components/MobileDropDown'
import MobileSidebar from '../../components/adminComponents/MobileSidebar'
import { useSideBarContext } from '../../contexts/SideBarContextAdmin'


const Dashboard = () => {
  const {openSideBar} = useSideBarContext()
  return (
    <div className='grid grid-cols-12 bg-black'>
      <div className='lg:col-span-2 col-span-1'>
        {/* <SideBarDashboard/> */}
        {openSideBar && <div className='lg:hidden block'><MobileSidebar/></div>}
      <div className='max-sm:hidden block'><MobileSidebar/></div>
      </div>
      <div className='md:col-span-10 col-span-12'>
        <Outlet/>
      </div>
    </div>
  )
}

export default Dashboard