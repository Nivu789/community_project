
import DropDown from './DropDown';
import { useState } from 'react';
import { useRef , useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from "react-icons/fa";

const MenuItem = ({item,depthLevel,textColor}:any) => {
    const [dropdown, setDropdown] = useState(false);
    const menuRef = useRef<HTMLLIElement>(null);
    
    useEffect(() => {
      const handler = (event:Event) => {
       if (dropdown && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setDropdown(false);
        console.log("Here")
       }
      };
      document.addEventListener("mousedown", handler);
      document.addEventListener("touchstart", handler);
      return () => {
       // Cleanup the event listener
       document.removeEventListener("mousedown", handler);
       document.removeEventListener("touchstart", handler);
      };
     }, [dropdown]);

     const onMouseEnter = () => {
      setDropdown(true);
      console.log("enter")
     };
     
     const onMouseLeave = () => {
      setDropdown(false);
      console.log("out")
     };
     
     const [colorIndex, setColorIndex] = useState(0);
    const colors = ['transparent', 'green-400'];


     useEffect(() => {
      if (item.title === 'JOIN US') {
        const intervalId = setInterval(() => {
          setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
        }, 1000);
  
        return () => clearInterval(intervalId);
      }
    }, [item.title, colors])

      
        return (
      <>
      <div className='w-72'>
        <li className={`relative items-center border-x-2 font-bold ${textColor=="text-blue-300" ? textColor+" text-md hover:bg-black" : "text-white"} ${item.title=="JOIN US" ? `bg-${colors[colorIndex]}` : ''} bg-orange-800 w-full py-2 flex hover:bg-orange-600`} ref={menuRef} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          {item.submenu ? (
            <>
              <button type="button" aria-haspopup="menu" className={`w-full gap-1 cursor-pointer flex items-center justify-center`} aria-expanded={dropdown ? "true":"false"}
      onClick={() => setDropdown((prev) => !prev)}>
                {item.title}{' '}
                {depthLevel > 0 ? <span>&raquo;</span> : <FaChevronDown />}
              </button>
              <DropDown submenus={item.submenu} dropdown={dropdown} depthLevel={depthLevel}/>
            </>
          ) : (
            <Link to={item.url} className={`w-full flex items-center justify-center text-center`}>{item.title}</Link>
          )}
        </li>
        </div>
        </>
      );
}

export default MenuItem