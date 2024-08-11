import React from 'react'

interface BearerCardProps {
    name:string,
    image:string
}

const BearerCard = ({name,image}:BearerCardProps) => {
    return (

        <div className='flex flex-col p-3 items-center'>
            <div className='h-80 w-60'>
                <img src={image} alt="" className='object-cover w-full h-full'/>
            </div>

            <div className='font-bold text-xl bg-white w-3/4 text-center shadow-xl'>
                {name}
            </div>
        </div>
    )
}

export default BearerCard