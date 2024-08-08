import React, { useEffect } from 'react'
import MobileMenuItems from './MobileMenuItems';

const MobileDropDown = ({ submenus, dropdown, depthLevel}:any) => {
    const textColor = depthLevel == 0  ? "text-blue-300" : "text-white";
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? "text-black" : "";
    

    console.log(depthLevel)
    return (
      <ul className={`dropdown ${dropdownClass} ${dropdown ? "flex flex-col" : "hidden"}`}>
        {submenus.map((submenu:any, index:any) => (
          <MobileMenuItems items={submenu} key={index} depthLevel={depthLevel} textColor={textColor}/>
        ))}
      </ul>
    );
}

export default MobileDropDown