

import { useSideBarContext } from '../../contexts/SideBarContextAdmin';
import { mobileMenuItems } from './mobileMenuItems';
import SideBarITem from './SideBarITem';

import { FaPlus } from "react-icons/fa";


const MobileSidebar = () => {
    const {openSideBar,setOpenSideBar} = useSideBarContext()

  return (
    <div className='h-screen lg:w-64 bg-slate-700 text-2xl overflow-y-auto z-40 fixed top-14'>
        <div className='w-full flex justify-end absolute pr-4 pt-4 lg:hidden'><FaPlus className="bg-white" onClick={()=>setOpenSideBar(!openSideBar)} style={{transform:"rotate(135deg)"}}/></div>
        {mobileMenuItems && mobileMenuItems.map((item)=>(
            <SideBarITem item={item}/>
        ))}

    </div>
  )
}

export default MobileSidebar