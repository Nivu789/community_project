import React from 'react'

const Container = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='lg:mt-7 w-full'>
        <div className='mx-auto lg:w-3/4'>
             {children}
        </div>
    </div>
  )
}

export default Container