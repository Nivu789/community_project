import React from 'react'
import { motion ,Variants} from "framer-motion"

const BottomSection = () => {
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
    <motion.div className='grid lg:grid-cols-2 bg-orange-100 mt-24' initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true}}
    variants={cardVariants}>
        <div className='w-full h-full flex items-center col-span-1 p-6'>
            <img className="rounded-md" src="https://static.theprint.in/wp-content/uploads/2018/09/GettyImages-3208896-e1538278655793-696x442.jpg?compress=true&quality=80&w=376&dpr=2.6" alt="" />
        </div>

        <div className='flex flex-col gap-7 p-6'>
            <h1 className='text-2xl'>Welcome to the Samskrithi Pullur</h1>
            <div className='text-md font-semibold'>We're glad you're considering joining us. Throughout our history, our volunteer-run organisation has served the community of expatriate women with friendship, professional networking, and all kinds of cultural activities. Each year we have +100 activities ranging from book clubs to tennis, from coffee mornings to cultural events, from tourist sights to hiking…and much more.
                There are so many ways to get involved! We hope you'll take advantage of all the Club has to offer and enjoy getting to know the other members. We think you'll find that the International Social Club is a great way to connect with other expatriate women and experience everything your host country has to offer. Thanks for considering us!
            </div>
        </div>
    </motion.div>
  )
}

export default BottomSection