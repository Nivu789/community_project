import React, { useEffect, useState } from 'react'
import Button from './Button'


type CarouselProp = {
    images:{ location: string; buttonText: string; }[]
    interval?:number,
    className?:string,
    singleButton?:boolean,
    buttonText?:string;
    noButton?:boolean
}
export const Carousel = ({images,interval=6000,className,singleButton,buttonText,noButton}:CarouselProp) => {
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
        <>
        <div className="flex w-full flex-col items-center bg-orange-900 h-full">
                <img src={images[activeIndex].location} className={className?className:"w-full h-full lg:object-cover object-center"}></img>
                <div className='flex items-center justify-center lg:h-full bg-brown-800 lg:w-full'>
                    {!noButton && !singleButton ? <Button text={images[activeIndex].buttonText} to='/'/> : !noButton && <Button text={buttonText?buttonText : ""} to='/'/>}
                    {noButton && <div className='text-center text-white font-semibold'>{images[activeIndex].buttonText}</div>}
                </div>
            </div>
            
        </>
  )
}
