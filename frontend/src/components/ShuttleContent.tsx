import { useFetchEventsOfActivity } from '../hooks/useFetchEventsOfActivity'
import { ActivityCarousel } from './ActivityCarousel'
import Slider from "react-slick";
import moment from 'moment';
import {motion,Variants} from 'framer-motion'

const ShuttleContent = ({activityName}:{activityName:string}) => {
    const images = [
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

    const settings = {
        dots: true,
        infinite: true,
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

    const {eventData,eventsLoading} = useFetchEventsOfActivity(activityName||"")

  return (
    <>
    <div className='h-[750px]'>
        <ActivityCarousel images={images}/>
    </div>
    
    <div className='grid grid-cols-3 h-[600px] mt-7'>
       <div className='w-96 mx-auto col-span-1'>
       <div className="slider-container h-full bg-green-600">
            <div className='bg-green-700 w-full text-center text-white text-xl'>Upcoming events</div>
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


       <div className='text-white bg-green-600 w-full col-span-2 flex items-center justify-center flex-col relative'>
          <motion.img src="/shuttleSmash.png" alt="" className='absolute mr-72' initial={{opacity:0, y:100}} transition={{duration:1}} whileInView={{opacity:100,y:0}}/>
            <motion.div initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: true }}
          variants={cardVariants} className='text-5xl font-Oswald ml-24'>Ready to step up your game?</motion.div>
            <div className='font-Oswald text-2xl ml-24'>Join us on the court and smash your way to fun!</div>
       </div>

    </div>
    </>
  )
}

export default ShuttleContent