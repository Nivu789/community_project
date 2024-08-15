
import { SiGeneralelectric } from "react-icons/si";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useState } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';

interface SideBarItem {
    title: string;
    url?: string;
    children?: SideBarItem[]; 
    icon?:string
  }
  
  interface SideBarItemProps {
    item: SideBarItem; 
  }

const SideBarITem = ({item}:SideBarItemProps) => {
    const [open,setOpen] = useState(false)

    return (
        <>
          <div 
            className='flex p-4 justify-between items-center bg-slate-800 text-white cursor-pointer pt-9'
            onClick={() => setOpen(!open)}
          >
            <Link to={item.url ? item.url : "#"}><div className='flex items-center gap-2'>
              <i className={`${item.icon}`}></i>
              <div className="text-xl">{item.title}</div>
            </div></Link>
            {item.children && (
              <MdOutlineArrowDropDown 
                style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
              />
            )}
          </div>
    
          {open && item.children && (
            <div className='p-4'>
              {item.children.map((childItem, index) => (
                <SideBarITem key={index} item={childItem} />
              ))}
            </div>
          )}
        </>
      );


  
}

export default SideBarITem