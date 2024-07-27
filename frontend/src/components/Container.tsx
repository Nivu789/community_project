import React from 'react'

const Container = ({children,className}:{children:React.ReactNode,className?:string}) => {
  return (
    <div className={`lg:mt-7 w-full ${className}`}>
        <div className='mx-auto lg:w-3/4'>
             {children}
        </div>
    </div>
  )
}

export default Container