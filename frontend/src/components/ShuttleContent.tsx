import { useFetchEventsOfActivity } from '../hooks/useFetchEventsOfActivity'
import { ActivityCarousel } from './ActivityCarousel'
import Slider from "react-slick";
import moment from 'moment';
import {motion,Variants} from 'framer-motion'
import { useParams } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";
import { memo, useEffect, useState } from 'react';
import { FlipWords } from './FlipWords';
import { useFetchActivityImages } from '../hooks/useFetchActivityImages';


const ShuttleContent = () => {

  const {activityName} = useParams()


    const imagesCarousel = [
        { 
            location: "/shuttle1.jpg",
            text:"Team up, rally together, and conquer the court"
        },
        { 
            location: "/shuttle2.jpg",
            text:"Where precision meets power—our synthetic court is your new playground!"
        },
        { 
            location: "/shuttle3.jpg",
            text:"The ultimate badminton experience starts here"
        }
    ]

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

  const [colorIndex,setColorIndex] = useState(0)
  const colors = ["red","green","blue"]
  const [bgColor,setBgColor]  = useState(colors[0])

  //  useEffect(()=>{
  //   const changeColor = setInterval(() => {
  //     setColorIndex(prevIndex => {
  //       const newIndex = prevIndex >= 2 ? 0 : prevIndex + 1;
  //       setBgColor(colors[newIndex]);
  //       return newIndex;
  //     });
  //   }, 2000);

  //   console.log(bgColor)
  //   return () => clearInterval(changeColor)
  //  },[colorIndex])

  const ColorChanger = memo(() => {
    const colors = ["red", "green", "blue"];
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


   const words = ["Serve, smash, win","Train, play, conquer","Badminton: Where speed meets strategy"]

   const settingsImageSection = {
    className: "center",
    centerMode: true,
    // infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
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

  const [refetch] = useState(false)
  const {images} = useFetchActivityImages(activityName+"/",refetch,activityName)

  return (
    <>
    <div className='bg-green-800 text-white flex  justify-center font-Oswald text-4xl py-7'>SAMSKRITHI BADMINTON CLUB</div>
    <div className='text-5xl flex justify-center  bg-green-600 relative h-14 items-center'><FlipWords words={words}/></div>
    <div className='lg:h-[750px] mt-16'>
        <ActivityCarousel images={imagesCarousel}/>
    </div>
    
    <div className='grid lg:grid-cols-3 lg:h-[600px] mt-7 grid-cols-1 max-sm:grid-rows-2'>
       <div className='w-96 mx-auto col-span-1 h-full'>
       <div className="slider-container h-full bg-green-600 max-sm:h-[600px]">
            <ColorChanger/>
          {eventsLoading ? <div role="status" className="flex justify-center items-center h-full">
                              <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                            <span className="sr-only">Loading...</span>
                            </div> : 

          <Slider {...settings} className="h-fit">
        {eventData && eventData.length>0 && eventData.map((event)=>(
          event.img ?
            <div className="h-[600px] w-full">
              <img src={event.img} alt="" className="object-cover w-full h-full"/>
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
        {eventData.length ==0 && <div className="text-white flex justify-center items-center h-full">No events currently</div>}
    </div> 
       </div>


       <div className='text-white bg-green-600 w-full lg:col-span-2 flex items-center justify-center flex-col relative mt-3'>
          <motion.img src="/shuttleSmash.png" alt="" className='absolute lg:mr-72 mr-24 z-0' initial={{opacity:0, y:100}} transition={{duration:1}} whileInView={{opacity:100,y:0}}/>
            <motion.div initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: true }}
          variants={cardVariants} className='lg:text-5xl text-2xl font-Oswald ml-24 max-sm:mt-12'>Ready to step up your game?</motion.div>
            <div className='font-Oswald lg:text-2xl ml-24 max-sm:w-1/2 max-sm:text-center'>Join us on the court and smash your way to fun!</div>
            <a href="https://samskruthibucket.s3.amazonaws.com/SAMSKRITHI+BADMINTON+CLUB.pdf" className='cursor-pointer z-10' target='_blank'><button className='cursor-pointer bg-red-600 p-3 rounded-full mt-2 max-sm:ml-24 max-sm:text-sm'>Get the membership form</button></a>
       </div>

    </div>

    <div className="mt-24">
        <div className="bg-green-600 text-white text-2xl p-2">Recent Activities</div>
        <div className="slider-container bg-black h-96">
      <Slider {...settingsImageSection} className="h-96">
        
          {images && images.length>0 && images.map((image,index)=>(
            <div key={index} className="h-96 w-full border-2 border-white"><img src={`https://samskruthibucket.s3.amazonaws.com/${image}`} alt="" className="h-full w-full object-cover object-center"/></div>
            
          ))}
        
      </Slider>
    </div>
    </div>

    <div className='flex justify-center flex-col items-center mt-10 bg-green-600 h-96 relative text-white gap-6'>
      <div className='text-4xl font-Oswald text-center'>Want to know more before proceeding?</div>
      <div className='text-xl mt-6'>Feel free to reach out to us</div>
      <div className='flex gap-8 max-sm:flex-col'>
        <div  className='flex items-center'>
          <FaWhatsapp className='text-3xl'/>
          <p>9526289886 : Praveen</p>
          </div>
          <div className='flex items-center'>
          <FaWhatsapp className='text-3xl'/>
          <p>9447469699 : Santhosh</p>
          </div>
          </div>
          
    </div>
    </>
  )
}

export default ShuttleContent