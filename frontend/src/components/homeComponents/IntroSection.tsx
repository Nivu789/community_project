import React, { useEffect, useState } from 'react'
import { motion , Variants  } from "framer-motion"
import Announcement from './Announcement';
import Carousel from "framer-motion-carousel";
import axios from 'axios';
import { BASE_URL } from '../../config/config';
import { Carousel as CustomCarousel } from '../Carousel'


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


      const imagesSet = [
        {
          location:"./gandhi.jpg",
          buttonText:"സത്യം ഒരു വലിയ മരുന്നാണ്"
        },
        {
          location:"./gandhi4.jpg",
          buttonText:"വിശ്വസിക്കുന്നതിന്‍റെ ശക്തി അന്തരീക്ഷമാണ്"
        },
        {
          location:"./gandhi3.jpg",
          buttonText:"ജീവിതം സമാധാനത്തിലും കരുണയിലും നിലനിൽക്കണം"
        },
        {
          location:"./gandhi5.jpg",
          buttonText:"സത്യം എപ്പോഴും ജയം നേടും"
        },
        {
          location:"./gandhi6.jpg",
          buttonText:"ശക്തി ശരീരത്തിൽ അല്ല, അത് മനസിലാണ്"
        },
        {
          location:"./gandhi7.jpg",
          buttonText:"ആശയങ്ങൾ ഒരു മനുഷ്യന്‍റെ ഏറ്റവും മികച്ച സൗന്ദര്യമാണ്"
        },
        {
          location:"./gandhi8.jpg",
          buttonText:"ദൈവം ഉണരുന്നവരുടെ ഹൃദയങ്ങളിൽ ആണ് വസിക്കുന്നത്"
        },
      ]


      return (
        <motion.div
          className='grid grid-cols-1 lg:grid-cols-3  gap-4 border-t-2 lg:mt-6 bg-orange-700 h-full'
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <div className='order-2 lg:order-1 flex flex-col gap-1 lg:pr-6 h-full'>
            <div className='text-xl'>Upcoming Events</div>
            <span className='w-full bg-orange-800 block'>&nbsp;</span>
            <div className='bg-slate-500 h-full'>
              <Carousel autoPlay={true} interval={4000} loop={true} renderDots={()=>null}>
                {images &&
                  images.length > 0 &&
                  images.map((item, i) => (
                    <img
                      draggable='false'
                      src={`${item}`}
                      key={i}
                      width='100%'
                      alt=''
                      style={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '100%',
                      }}
                    />
                  ))}
              </Carousel>
            </div>
          </div>
    
          <div className='order-1 lg:order-2 bg-orange-100 text-xl flex flex-col justify-around mt-8 h-[500px]'>
            <div className='flex justify-center'>
              <img src='./logo.png' alt='' className='h-40 w-40 brightness-150' />
            </div>
            <CustomCarousel to=''
              images={imagesSet}
              interval={6000}
              className='w-full h-full object-cover object-center'
              noButton
            />
          </div>
    
          <div className='order-3 lg:order-3'>
            <Announcement />
          </div>
        </motion.div>
      );
    };


export default IntroSection