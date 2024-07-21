import React from 'react'
import { motion , Variants  } from "framer-motion"
import Announcement from './Announcement';

const IntroSection = () => {

    const cardVariants: Variants = {
        offscreen: {
          x:300 ,
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
    <motion.div className='grid lg:grid-cols-3 lg:h-[700px]' initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true}}
    variants={cardVariants}>
        <div className='bg-blue-200'>
            <div className='grid grid-cols-2 h-full'>
                <div className='bg-blue-100 flex flex-col justify-between h-full py-28'>
                    <div className='bg-blue-400 lg:h-1/2 text-3xl'>
                        A community that unites people
                    </div>
                    <div>
                    Welcoming International women since 1981
                    </div>
                </div>
                <div className='bg-blue-200 flex justify-center items-center'>
                    <div className='h-3/4 bg-black rounded-t-3xl relative'>
                        <img className="rounded-t-3xl object-cover w-full h-full object-center" src="https://janmabhumi.in/wp-content/uploads/2021/12/rajendran-pullur.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
        
        <div className='bg-blue-100 text-xl p-5 flex flex-col justify-around'>
            <div>
            The International Social Club is the perfect way for international women to make new friends and network professionally. We welcome new members all year round, and our club activities are a great way to meet people from all over the world. In addition to club activities, our members also have access to key resources that provide day-to-day information and support. These resources include a directory of local businesses and services, a calendar of events, and a forum where members can ask questions and share advice. Whether you're looking for new friends or professional connections, the International Social Club is the perfect place to start
            </div>
            <div className='flex lg:justify-end justify-center mt-3'>
            <button className='bg-black text-white'>JOIN US</button>
            </div>
        </div>

        <div>
          <Announcement/>
        </div>
        
    </motion.div>
  )
}

export default IntroSection