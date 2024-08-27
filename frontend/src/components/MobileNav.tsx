
import { useState,useRef ,useEffect} from 'react';
import { menuItemsData } from './menuItems';
import MobileMenuItems from './MobileMenuItems';
import { ImMenu } from "react-icons/im";

const MobileNav = () => {
    const depthLevel = 0;
    const [showMenu, setShowMenu] = useState(false);
    let ref = useRef<HTMLUListElement>(null);
    const menuRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        console.log("Eun")
        // console.log(showMenu)
        const handler = (event:Event) => {
          if (showMenu && ref.current && !ref.current.contains(event.target as Node) && !menuRef.current?.contains(event.target as Node)) {
            console.log(showMenu)
            setShowMenu(false);
          }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
          // Cleanup the event listener
          document.removeEventListener("mousedown", handler);
          document.removeEventListener("touchstart", handler);
        };
      }, [showMenu]);


      console.log(showMenu)
  return (
    <nav className="w-full fixed top-0 z-30">
      <button ref={menuRef}
        className="mobile-nav__menu-button bg-white py-2 px-2 w-full shadow-xl"
        type="button"
        onClick={(event) => {
            event.stopPropagation();
            setShowMenu((prev) => !prev)
        }
            }>
        <ImMenu className='text-2xl'/>
      </button>

      {showMenu && (
        <ul className="menus bg-orange-300 w-full" ref={ref}>
          {menuItemsData.map((menu, index) => {
            return (
              <MobileMenuItems
                items={menu}
                key={index}
                depthLevel={depthLevel}
                showMenu={showMenu}
                setShowMenu={setShowMenu}
              />
            );
          })}
        </ul>
      )}
    </nav>
  )
}

export default MobileNav