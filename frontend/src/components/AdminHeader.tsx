import  { useCallback, useState } from 'react'
import { RxAvatar } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";
import { useSideBarContext } from '../contexts/SideBarContextAdmin';


const AdminHeader = () => {
  const [dropdown,setDropdown] = useState(false)
  const navigate = useNavigate()

  const handleSignout = useCallback(()=>{
    localStorage.removeItem("adminToken")
    navigate('/admin/signin')
  },[])

  const {openSideBar,setOpenSideBar} = useSideBarContext()

  return (
    <div className='w-full bg-slate-600 h-14 fixed top-0 z-50'>
      <div className='flex justify-between items-center h-full px-6'>
        <div className='text-2xl  text-white font-bold flex items-center gap-2'>
          <div className='min-w-8 lg:hidden block'>{!openSideBar && <FaPlus onClick={()=>setOpenSideBar(!openSideBar)}/>}</div>
          Samskrithi
        </div>
          <div className=''>
          <RxAvatar className='text-4xl text-white cursor-pointer' onClick={()=>setDropdown(!dropdown)}/>
          <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
    
    {dropdown && <div className="py-1" role="none">
      <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"  id="menu-item-0">Account settings</a>
      <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"  id="menu-item-1">Support</a>
      <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"  id="menu-item-2">License</a>
      <form method="POST" action="#" role="none">
        <button type="button" className="block w-full px-4 py-2 text-left text-sm text-gray-700" role="menuitem" id="menu-item-3" onClick={handleSignout}>Sign out</button>
      </form>
    </div>}
    
  </div>
          </div>
      </div>
    </div>
  )
}

export default AdminHeader