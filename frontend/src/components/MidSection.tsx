import React from 'react'
import { motion } from "framer-motion"
import Button from './Button'

const MidSection = () => {
  return (
    <div className='flex flex-col max-h-fit'>
        <div className='h-1/2 flex items-center justify-center text-4xl bg-neutral-400 flex-col'>
                <div className='pt-16'>
                So many ways to get involved
                </div>
            
            <div className='flex gap-4 max-h-fit'>
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
        
    </div>
  )
}

export default MidSection