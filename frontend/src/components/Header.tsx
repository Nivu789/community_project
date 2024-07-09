import { NavLink } from 'react-router-dom'
import Container from './Container'
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';
import Button from './Button';


const Header = () => {
  const [mobileMenu,setMobileMenu] = useState(false)
  return (
    <>
    <Container>
      <div className='flex flex-col'>
      <div className='lg:flex justify-between  p-3 rounded-md px-60 hidden font-bold'>
        <NavLink to={'/home'} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "" : ""}>HOME</NavLink>
        <NavLink to={'/home'} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "" : ""}>JOIN US</NavLink>
        <NavLink to={'/activities'} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "" : ""}>OUR ACTIVITIES</NavLink>
        <NavLink to={'/events'} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "" : ""}>EVENTS CALENDER</NavLink>
        <NavLink to={'/home'} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "" : ""}>CONTACT</NavLink>
    </div>
    <div className='lg:flex items-center hidden mt-6 pb-4'>
      <div className='mx-auto'>
      <Button to='/member-login' text='Member Login'></Button>
      </div>
    </div>
    </div>
    
    </Container>
    
    <div className='w-full bg-blue-300 lg:hidden h-10'>
    <div className='bg-blue-700 w-fit block h-full p-3'>
    <IoMenu className='text-3xl' onClick={()=>setMobileMenu(!mobileMenu)}/>
    </div>
    </div>

    {mobileMenu &&

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
    
    }
    </>
  )
}

export default Header