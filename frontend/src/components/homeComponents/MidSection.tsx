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

      const images = ["./donate.jpg","./donate.jpg"]
  return (
    <motion.div className='flex flex-col max-h-fit' initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true}}
    variants={cardVariants}>
        <div className='h-1/2 flex items-center justify-center text-4xl flex-col'>
                <div className='pt-16 bg-neutral-400 w-full text-center pb-16'>
                So many ways to get involved
                </div>
            
          <div className='flex lg:flex-row flex-col  bg-red-500 w-full justify-center h-[800px]'>
            <div className="flex w-full flex-col items-center gap-3 h-full bg-red-800">
                <Carousel images={images}/>
                <div className=''>
                    <Button text='Attend exclusive events' to='/'/>
                </div>
            </div>

          </div>
          </div>
          
    </motion.div>
  )
}

export default MidSection