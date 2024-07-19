import React from 'react'
import { motion ,Variants} from "framer-motion"
import Button from '../Button'

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

  return (
    <motion.div className='flex flex-col max-h-fit' initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true}}
    variants={cardVariants}>
        <div className='h-1/2 flex items-center justify-center text-4xl flex-col'>
                <div className='pt-16 bg-neutral-400 w-full text-center pb-16'>
                So many ways to get involved
                </div>
            
            <div className='flex gap-4 max-h-fit lg:flex-row flex-col'>
            <motion.div className="flex items-center flex-col" animate={{ y: 50 }}
            transition={{ ease: "easeOut", duration: 2 }}>
                <img src="https://socialclub-ocrelys.wildapricot.org/resources/Pictures/Social-Club-Attend-Exclusive-Events-Ocrelys-Wild-Apricot.png" alt="" />
                <Button text='Attend exclusive events' to='/'/>
            </motion.div>

            <motion.div className="flex items-center flex-col" animate={{ y: 50 }}
            transition={{ ease: "easeOut", duration: 2 }}>
                <img src="https://socialclub-ocrelys.wildapricot.org/resources/Pictures/Social-Club-Attend-Exclusive-Events-Ocrelys-Wild-Apricot.png" alt="" />
                <Button text='Participate in events' to='/'/>
            </motion.div>

            <motion.div className="flex items-center flex-col" animate={{ y: 50 }}
            transition={{ ease: "easeOut", duration: 2 }}>
                <img src="https://socialclub-ocrelys.wildapricot.org/resources/Pictures/Social-Club-Attend-Exclusive-Events-Ocrelys-Wild-Apricot.png" alt="" />
                <Button text='Donate and volunteer' to='/'/>
            </motion.div>
        </div>
        </div>
        <div>
        
        </div>
        
    </motion.div>
  )
}

export default MidSection