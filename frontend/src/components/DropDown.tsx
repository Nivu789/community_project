
import MenuItem from './MenuItem';


interface DropDownProps {
  submenus: any[];
  dropdown: boolean;
  depthLevel: number;
}

const DropDown = ({submenus,dropdown,depthLevel}:any) => {
  console.log(depthLevel)
  const textColor = depthLevel == 0  ? "text-blue-300" : "text-white";
    depthLevel = depthLevel + 1
    const dropdownClass = depthLevel > 1 ? "left-full top-0" : "left-0 top-full";



    return (
        <ul className={`z-10 dropdown w-full text-center bg-red-400 absolute ${dropdownClass} ${dropdown ? "flex flex-col" : "hidden"}`}>
          {submenus.map((submenu:any, index:any) => (
            <MenuItem item={submenu} key={index} depthLevel={depthLevel} textColor={textColor}/>
          ))}
        </ul>
);
}

export default DropDown