import { useState,useEffect } from "react"
import {motion} from 'framer-motion'

type CarouselProp = {
    images:{ location: string; text:string }[]
    interval?:number,
    className?:string,
}
export const ActivityCarousel = ({images,interval=6000,className}:CarouselProp) => {
    const [activeIndex,setActiveIndex] = useState(0)
    
    const nextSlide = () =>{
        setActiveIndex((prevIndex)=>prevIndex===images.length-1 ? 0 : prevIndex+1)
    }

    const prevSlide = () =>{
        setActiveIndex((prevIndex)=>prevIndex===0 ? images.length - 1 : prevIndex - 1)
    }

    const [scale, setScale] = useState(1);
    const [translateX, setTranslateX] = useState(0);

    useEffect(()=>{
        const activeInterval = setInterval(() => {
            setScale(1.5); // Scale up before changing the image
            setTimeout(() => {
              nextSlide();
              setScale(1); // Scale down after the image has changed
            }, 500); // Adjust the timing as needed
          }, interval);
      
          return () => {
            clearInterval(activeInterval);
          };

    },[interval])

    // useEffect(() => {
    //     const moveText = setInterval(() => {
    //       setTranslateX((prevX) => (prevX >= 100 ? -100 : prevX + 10)); // Move text to the right by 10px until it reaches 500px
    //     }, 500); // Adjust the interval to control the speed of movement
    
    //     return () => {
    //       clearInterval(moveText);
    //     };
    //   }, []);

  return (
        <>
        <div className="relative flex w-full flex-col bg-black h-full justify-center">
                <motion.div className="absolute z-10 ml-32 mt-72 text-white text-4xl font-bold  w-[500px]" animate={{scale:1.2}} transition={{duration:6,repeat: Infinity, repeatType: "reverse"}}>{images[activeIndex].text}</motion.div>
                <img src={images[activeIndex].location} className={className?className:"w-full h-full lg:object-cover object-center"} 
                    style={{transition:"transform 6s ease-out",transform:`scale(${scale})`,opacity:.7}}
                ></img>
            </div>
        </>
  )
}