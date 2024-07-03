import React from 'react'

const Container = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='mt-7 w-full bg-red-700'>
        <div className='mx-auto w-1/2'>
             {children}
        </div>
    </div>
  )
}

export default Container