import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileDropDown from './MobileDropDown';
import { TiPlus } from "react-icons/ti";
import { TiMinus } from "react-icons/ti";

type MobileMenuItemProps = {
    items:any,
    depthLevel:number,
    showMenu?:boolean,
    setShowMenu?:(value:boolean)=>void
    textColor?:string
}

const MobileMenuItems = ({ items, depthLevel, showMenu, setShowMenu ,textColor}:MobileMenuItemProps) => {
    const [dropdown, setDropdown] = useState(false);

    const closeDropdown = () => {
        console.log(dropdown)
        dropdown && setDropdown(false);
        showMenu && setShowMenu && setShowMenu(false);
      };
    
      const toggleDropdown = (e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
        e.stopPropagation();
        console.log("Toggle")
        setDropdown((prev) => !prev);
      };


      return (
        <li className={`p-2 bg-orange-800 border-b-2 ${textColor=="text-blue-300" ? textColor+" text-md font-outline-3" : "text-white"}`} onClick={closeDropdown}>
          {items.submenu ? (
            <>
              <button type="button" aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"} className='flex items-center'>
                <Link to={items.url}>
                  {items.title}
                </Link>
                <div onClick={(e) => toggleDropdown(e)}>{!dropdown && <TiPlus className='text-xl bg-orange-600 rounded-full' />}

                    
                  {dropdown ? (
                    <TiMinus className='text-xl bg-orange-600 rounded-full'/>
                  ) : (
                    <span className="arrow" />
                  )}
                </div>
              </button>
              <MobileDropDown
                depthLevel={depthLevel}
                submenus={items.submenu}
                dropdown={dropdown}
              />
            </>
          ) : !items.url && items.submenu ? (
            <>
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={dropdown ? "true" : "false"}>
                {items.title}{" "}
                <div onClick={(e) => toggleDropdown(e)}>
                  {dropdown ? (
                    <span className="arrow-close" />
                  ) : (
                    <span className="arrow" />
                  )}
                </div>
              </button>
              <MobileDropDown
                depthLevel={depthLevel}
                submenus={items.submenu}
                dropdown={dropdown}
              />
            </>
          ) : (
            <Link to={items.url}>{items.title}</Link>
          )}
        </li>
      );
}

export default MobileMenuItems