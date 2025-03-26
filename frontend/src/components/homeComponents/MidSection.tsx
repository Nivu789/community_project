import React from 'react'
import { motion ,Variants} from "framer-motion"
import Button from '../Button'
import { Carousel } from '../Carousel';

const MidSection = () => {

    const cardVariants: Variants = {
        offscreen: {
          x:-300, 
          opacity:0
        },
        onscreen: {
          x: 0,
          rotate: 0,
          opacity:100,
          transition: {
            type: "tween",
            bounce: 0.4,
            duration: 0.8
          }
        }
      };

      const images = [
        {
          location:"./donate.jpg",
          buttonText:"Donate and Volunteer"
        },
        {
          location:"./activities.jpg",
          buttonText:"Attend Exclusive Events"
        },
        {
          location:"./honor.jpg",
          buttonText:"Honor and Appreciate"
        },
      ]

  return (
    <motion.div className='flex flex-col max-h-fit' initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true}}
    variants={cardVariants}>
        <div className='h-1/2 flex items-center justify-center text-4xl flex-col'>
                <div className='pt-16 bg-orange-100 w-full text-center pb-16 font-Oswald'>
                SO MANY WAYS TO GET INVOLVED
                </div>
            
          <div className='flex flex-col  bg-orange-400 w-full justify-center h-[800px]'>
            <Carousel images={images} to=''/>
          
          </div>
          </div>
          
    </motion.div>
  )
}

export default MidSection