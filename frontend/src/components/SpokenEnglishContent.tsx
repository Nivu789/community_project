import React, { memo, useEffect, useState } from 'react'
import { ActivityCarousel } from './ActivityCarousel'
import Slider from 'react-slick'
import moment from 'moment'
import { motion,Variants } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa6'
import { useFetchActivityImages } from '../hooks/useFetchActivityImages'
import { useParams } from 'react-router-dom'
import { useFetchEventsOfActivity } from '../hooks/useFetchEventsOfActivity'

const SpokenEnglishContent = () => {

    const {activityName} = useParams()

    const imagesCarousel = [
        {
            location: "/spokenenglish1.jpg",
            text: "Unlock the world with fluent English—your voice deserves to be heard!"
        },
        {
            location: "/spokenenglish2.jpg",
            text: "Transform your English, transform your life. Speak with confidence!"
        },
        {
            location: "/spokenenglish3.jpg",
            text: "From hesitation to confidence—master spoken English with ease"
        }
    ]

    const settingsImageSection = {
        className: "center",
        centerMode: false,
        // infinite: true,
        centerPadding: "60px",
        slidesToShow: 2,
        speed: 500,
        autoplay:true,
        autoplaySpeed:4000,
        cssEase: 'linear',
    // variableWidth: true,
    // variableHeight: true
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
      };

      const {eventData,eventsLoading} = useFetchEventsOfActivity(activityName||"")

    const settings = {
        dots: true,
        infinite: eventData.length>1,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay:true,
        autoplaySpeed:5000,
      };

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

      const ColorChanger = memo(() => {
        const colors = ["brown", "black", "grey"];
        const [colorIndex, setColorIndex] = useState(0);
        const [bgColor, setBgColor] = useState(colors[0]);
      
        useEffect(() => {
          const changeColor = setInterval(() => {
            setColorIndex((prevIndex) => {
              const newIndex = prevIndex >= 2 ? 0 : prevIndex + 1;
              setBgColor(colors[newIndex]);
              return newIndex;
            });
          }, 2000);
      
          return () => clearInterval(changeColor);
        }, [colorIndex]);
      
        return (
          <div className={`w-full text-center text-white text-xl`} style={{ backgroundColor: `${bgColor}` }}>
            Upcoming events
          </div>
        );
      });

    const [refetch] = useState(false)
    const {images} = useFetchActivityImages(activityName+"/",refetch,activityName)

    console.log("Images",images)
   
    return (
        <>
            <div className='lg:h-[750px]'>
                <ActivityCarousel images={imagesCarousel} />
            </div>

            <div className='grid lg:grid-cols-3 lg:h-[600px] mt-7 grid-cols-1 max-sm:grid-rows-2'>
                <div className='w-96 mx-auto col-span-1 h-full'>
                    <div className="slider-container h-full bg-orange-200 max-sm:h-[600px]">
                        <ColorChanger/>
                        {eventsLoading ? <div role="status" className="flex justify-center items-center h-full">
                            <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div> :

                            <Slider {...settings} className="h-fit">
                                {eventData && eventData.length > 0 && eventData.map((event) => (
                                    event.img ?
                                        <div className="h-[600px] w-full">
                                            <img src={event.img} alt="" className="object-cover w-full h-full" />
                                        </div>
                                        :
                                        <div className="flex flex-col bg-orange-200 h-full">
                                            <div className="flex justify-center flex-col items-center h-[600px]">
                                                <div className="text-3xl">{event.title}</div>
                                                <div className="flex items-center"><b>Venue :&nbsp;</b> <p className="text-xl">{event.venue}</p></div>
                                                <div><b>Date :&nbsp;</b> {moment(event.startDate).format("DD/MM/yy")}</div>
                                                <div><b>Day :&nbsp;</b> {moment(event.startDate).format("dddd")}</div>
                                            </div>
                                        </div>
                                ))}
                            </Slider>


                        }
                        {eventData.length == 0 && <div className="text-white flex justify-center items-center h-full">No events currently</div>}
                    </div>
                </div>


                <div className='text-orange-800 bg-orange-200 w-full lg:col-span-2 flex items-center justify-center flex-col relative mt-3'>
                   
                    <motion.div initial='offscreen'
                        whileInView='onscreen'
                        viewport={{ once: true }}
                        variants={cardVariants} className='lg:text-5xl text-2xl font-Oswald'>Wish to know more?</motion.div>
                    <motion.div className='font-Oswald lg:text-2xl' initial={{y:100}} whileInView={{y:0}} transition={{duration:1,type:'spring'}}>Make a call to 9495617875</motion.div>
                </div>

            </div>

            <div className="mt-24">
                <div className="bg-orange-800 text-white text-2xl p-2">Recent Activities</div>
                <div className="slider-container bg-black h-96">
                    <Slider {...settingsImageSection} className="h-96">

                        {images && images.length > 0 && images.map((image, index) => (
                            <div key={index} className="h-96 w-full border-2 border-white"><img src={`https://samskruthibucket.s3.amazonaws.com/${image}`} alt="" className="h-full w-full object-cover object-center" /></div>

                        ))}

                    </Slider>
                </div>
            </div>

        </>
    )
}

export default SpokenEnglishContent