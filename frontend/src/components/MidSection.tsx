import React from 'react'
import { motion } from "framer-motion"

const MidSection = () => {
  return (
    <div className='flex flex-col h-[700px]'>
        <div className='h-1/2 flex items-center justify-center text-4xl bg-neutral-400 flex-col'>
                <div className='mt-8'>
                So many ways to get involved
                </div>
            
            <div className='flex gap-4'>
            <motion.div className="bg-gray-700" animate={{ y: 50 }}
            transition={{ ease: "easeOut", duration: 2 }}>
                <img src="https://socialclub-ocrelys.wildapricot.org/resources/Pictures/Social-Club-Attend-Exclusive-Events-Ocrelys-Wild-Apricot.png" alt="" />
            </motion.div>

            <motion.div className="bg-gray-700" animate={{ y: 50 }}
            transition={{ ease: "easeOut", duration: 2 }}>
                <img src="https://socialclub-ocrelys.wildapricot.org/resources/Pictures/Social-Club-Attend-Exclusive-Events-Ocrelys-Wild-Apricot.png" alt="" />
            </motion.div>

            <motion.div className="bg-gray-700" animate={{ y: 50 }}
            transition={{ ease: "easeOut", duration: 2 }}>
                <img src="https://socialclub-ocrelys.wildapricot.org/resources/Pictures/Social-Club-Attend-Exclusive-Events-Ocrelys-Wild-Apricot.png" alt="" />
            </motion.div>
        </div>
        </div>
        <div>
        
        </div>
        
    </div>
  )
}

export default MidSection