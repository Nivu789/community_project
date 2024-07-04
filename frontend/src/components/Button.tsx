import React from 'react'
import { Link } from 'react-router-dom'

interface ButtonProps {
    to:string,
    classname?:string
    type?:React.ButtonHTMLAttributes<HTMLButtonElement>
    text:string
}
const Button = ({to,classname,text}:ButtonProps) => {
  return (
    <Link to={to}><button className={classname?classname : "text-lg bg-blue-300 py-2 px-6 border-4 border-yellow-500 mt-2 font-semibold hover:font-bold"}>{text}</button></Link>
  )
}

export default Button