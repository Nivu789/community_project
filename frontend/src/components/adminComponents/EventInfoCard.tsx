import React from 'react'

const EventInfoCard = () => {
  return (
    <>
    
    <div className='grid lg:grid-cols-2 border-2 mt-6 px-4 bg-stone-400 text-black rounded-md'>
        
        <div className='flex flex-col lg:border-r-2 justify-center'>
            <div className='text-2xl underline'>
                Special Event
            </div>
            <div className='flex gap-2'>
                <div className='flex flex-col'>
                <label htmlFor="Start">Start:</label>
                <label htmlFor="Start">Start:</label>
                <label htmlFor="Start">Venue:</label>
                <label htmlFor="Start">Spaces left:</label>
                </div>
                <div className='font-semibold'>
                    <h1>1 July 2024</h1>
                    <h1>29 July 2024</h1>
                    <h1>Main hall</h1>
                    <h1>Open to all</h1>
                </div>
            </div>
        </div>
        
        <div className='flex gap-4'>
            <div className='w-44 h-full'>
                <img className="bg-cover bg-center" src="" alt="" />
            </div>
            <div className='flex flex-col gap-2'>
                <div className='text-4xl font-bold'>Art exhibition</div>
                <div className='text-xl hidden lg:block'>{"dadaddadad".length > 50 ? "dadaddadad".slice(0,30)+"...":"dadaddadad"}</div>
                <div className='text-xl lg:hidden'>{"dadaddadad".length > 50 ? "dadaddadad".slice(0,30)+"...":"dadaddadad"}</div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default EventInfoCard