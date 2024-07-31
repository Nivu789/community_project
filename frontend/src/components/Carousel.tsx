import React, { useEffect, useState } from 'react'

type CarouselProp = {
    images:string[]
    interval?:number
}
export const Carousel = ({images,interval=3000}:CarouselProp) => {
    const [activeIndex,setActiveIndex] = useState(0)
    
    const nextSlide = () =>{
        setActiveIndex((prevIndex)=>prevIndex===images.length-1 ? 0 : prevIndex+1)
    }

    const prevSlide = () =>{
        setActiveIndex((prevIndex)=>prevIndex===0 ? images.length - 1 : prevIndex - 1)
    }

    useEffect(()=>{
        const activeInterval = setInterval(nextSlide,interval)

        return () =>{
            clearInterval(activeInterval)
        }

    },[interval])

  return (
    <div className='bg-red-950'>
        <img src={images[activeIndex]} className="max-w-full max-h-full object-contain"></img>
    </div>
  )
}
