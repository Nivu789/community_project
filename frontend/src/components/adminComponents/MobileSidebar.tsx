

import { useSideBarContext } from '../../contexts/SideBarContextAdmin';
import { mobileMenuItems } from './mobileMenuItems';
import SideBarITem from './SideBarITem';

import { FaPlus } from "react-icons/fa";


const MobileSidebar = () => {
    const {openSideBar,setOpenSideBar} = useSideBarContext()

  return (
    <div className='h-screen md:w-64 bg-slate-700 text-2xl overflow-y-auto z-40 fixed top-14'>
        <div className='w-full flex justify-end absolute pt-4 lg:hidden pr-3'><FaPlus className="bg-white" onClick={()=>setOpenSideBar(!openSideBar)} style={{transform:"rotate(135deg)"}}/></div>
        {mobileMenuItems && mobileMenuItems.map((item)=>(
            <SideBarITem item={item}/>
        ))}

    </div>
  )
}

export default MobileSidebar