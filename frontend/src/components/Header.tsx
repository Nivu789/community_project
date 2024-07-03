import React from 'react'
import { NavLink } from 'react-router-dom'
import Container from './Container'

const Header = () => {
  return (
    <Container>
    <div className='flex justify-between bg-blue-400 p-3 rounded-md px-5'>
        <NavLink to={'/home'} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "" : ""}>HOME</NavLink>
        <NavLink to={'/home'} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "" : ""}>JOIN US</NavLink>
        <NavLink to={'/home'} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "" : ""}>OUR ACTIVITIES</NavLink>
        <NavLink to={'/home'} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "" : ""}>EVENTS CALENDER</NavLink>
        <NavLink to={'/home'} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "" : ""}>CONTACT</NavLink>
    </div>
    </Container>
  )
}

export default Header