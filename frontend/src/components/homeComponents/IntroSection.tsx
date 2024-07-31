import React, { useEffect, useState } from 'react'
import { motion , Variants  } from "framer-motion"
import Announcement from './Announcement';
import Carousel from "framer-motion-carousel";
import axios from 'axios';
import { BASE_URL } from '../../config/config';

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

      const [images,setImages] = useState<string[]>([])

      type EventItem = {
        img: string;
      };

      useEffect(()=>{
        axios.get(`${BASE_URL}/user/events?showInHome=true`)
        .then((response)=>{
          const eventItems: EventItem[] = response.data.events;
          setImages((prevImages) => [
            ...prevImages,
            ...eventItems.map((item) => item.img)
          ]);
        })
        console.log(images)
      },[])

  return (
    <motion.div className='grid lg:grid-cols-3 lg:h-[700px]' initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true}}
    variants={cardVariants}>
        <div className=''>
            {/* <div className='grid grid-cols-2 h-full'>
                <div className='bg-orange-100 flex flex-col justify-between h-full py-28'>
                    <div className='bg-orange-400 lg:h-1/2 text-3xl'>
                        A community that unites people
                    </div>
                    <div>
                    Welcoming International women since 1981
                    </div>
                </div>
                <div className='bg-orange-200 flex justify-center items-center'>
                    <div className='h-3/4 bg-black rounded-t-3xl relative'>
                        <img className="rounded-t-3xl object-cover w-full h-full object-center" src="https://janmabhumi.in/wp-content/uploads/2021/12/rajendran-pullur.jpg" alt="" />
                    </div>
                </div>
            </div> */}
            <div className='col-span-2 h-full flex flex-col gap-1 pr-6'>
                <div className='text-xl'>
                  Upcoming Events
                </div>
                <span className='w-full bg-orange-800 block'>&nbsp;</span>
                <div className='bg-slate-500 h-[650px]'>
                <Carousel autoPlay={true} interval={4000} loop={true}>
                {images && images.length > 0 && images.map((item, i) => (
                <img
                    draggable="false"
                    src={`${item}`}
                    key={i}
                    width="100%"
                    alt=""
                    style={{backgroundSize:"cover",backgroundPosition:"center",height:"100%"}}
                />
                ))}
            </Carousel>
                </div>
            </div>
        </div>
        
        <div className='bg-orange-100 text-xl p-5 flex flex-col justify-around mt-8'>
          <div className='flex justify-center'>
          <img src="./logo.png" alt="" className='h-52 w-52 brightness-150'/>
          </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptas laborum nesciunt corporis ab quia minima, repellat optio facilis quaerat illo veniam animi magnam id tenetur? Ipsum nostrum quia facilis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio minus minima dolorem, sequi atque quas consectetur repudiandae, iste saepe non culpa incidunt magni quibusdam. Quia dignissimos rem animi aperiam saepe.
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