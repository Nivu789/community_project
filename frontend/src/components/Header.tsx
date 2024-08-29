
import Container from './Container'

import MenuItem from './MenuItem';
import { menuItemsData } from './menuItems';
import MobileNav from './MobileNav';
import Marquee from 'react-fast-marquee'



const Header = () => {
  

  const depthLevel = 0;

  return (
    <>
    <Container>
      {/* <div className='flex flex-col'>
      <div className='lg:flex  justify-center gap-x-11 p-3 rounded-md  hidden font-bold bg-blue-700 text-white border-yellow-500 border-4'>
        <NavLink to={'/home'} className={"text-black bg-white p-2 rounded-full px-6"}>HOME</NavLink>
        <NavLink to={'/aboutus'} className={"text-black bg-white p-2 rounded-full px-6"}>ABOUT US</NavLink>
        <NavLink to={'/activities'} className={"text-black bg-white p-2 rounded-full px-6"}>OUR ACTIVITIES</NavLink>
        <NavLink to={'/gallery'} className={"text-black bg-white p-2 rounded-full px-6"}>GALLERY</NavLink>
        <NavLink to={'/events'} className={"text-black bg-white p-2 rounded-full px-6"}>EVENTS CALENDER</NavLink>
        <NavLink to={'/home'} className={"text-black bg-white p-2 rounded-full px-6"}>CONTACT</NavLink>
        <NavLink to={'/home'} className={"text-black bg-white p-2 rounded-full px-6"} onMouseEnter={()=>setSubComMenu(true)} onMouseLeave={()=>setSubComMenu(false)}>SUB COMMITIES
        {subComMenu && <motion.div animate={{ y: 3 }} transition={{ ease: "linear", duration: 1, type: "spring" }} className='absolute bg-orange-400 flex lex-col gap-2 rounded-md'>
                        <ul>
                          <li className='p-2 hover:bg-orange-600'>women</li>
                          <li className='p-2 hover:bg-orange-600'>children</li>
                          <li className='p-2 hover:bg-orange-600'>ex-service men</li>
                          <li className='p-2 hover:bg-orange-600'>farmers</li>
                        </ul>
                      </motion.div>}
        </NavLink>
    </div>
    <div className='lg:flex items-center hidden mt-6'>
      <div className='mx-auto'>
      
      <div className='text-6xl pt-3 text-orange-500 font-outline-2 font-malayalam font-semibold'>സംസ്‌കൃതി പുല്ലൂർ</div>
      </div>
    </div>
    </div> */}
    <div>
      <ul className='lg:flex w-full justify-center hidden bg-blue-800'>
        {menuItemsData.map((menu)=>(
          <MenuItem item={menu} depthLevel={depthLevel}/>
        ))}
      </ul>
      <div className='lg:hidden block'>
        <MobileNav/>
      </div>
    </div>
    <div className='bg-orange-700 border-2'>
    <Marquee className='overflow-y-hidden lg:h-24 h-36' direction='right' speed={100}><div className='text-5xl  text-white font-malayalam font-semibold'>സംസ്‌കൃതി പുല്ലൂർ</div></Marquee>
    <Marquee className='overflow-y-hidden h-14' speed={100}><div className='text-5xl  text-white font-malayalam font-semibold'>SAMSKRITHI PULLUR</div></Marquee>
    </div>
    </Container>
    
    {/* <div className='w-full bg-blue-300 lg:hidden h-10'>
    <div className='bg-blue-700 w-fit block h-full p-3'>
    <IoMenu className='text-3xl' onClick={()=>setMobileMenu(!mobileMenu)}/>
    </div>
    </div> */}

    {/* {mobileMenu &&

      <div className='grid z-10 absolute w-full bg-blue-200 lg:hidden'>
        <div className='flex flex-col col-span-1 p-6'>
       <ul className='flex flex-col gap-6'>
        <li className='hover:underline cursor-pointer hover:font-bold'>Home</li>
        <li className='hover:underline cursor-pointer hover:font-bold'>Join Us</li>
        <li className='hover:underline cursor-pointer hover:font-bold'>Our Activities</li>
        <li className='hover:underline cursor-pointer hover:font-bold'>Events</li>
        <li className='hover:underline cursor-pointer hover:font-bold'>Contact Us</li>
        <li className='hover:underline cursor-pointer hover:font-bold'>Member Login</li>
       </ul>
      </div>
      </div>
    
    } */}
    </>
  )
}

export default Header