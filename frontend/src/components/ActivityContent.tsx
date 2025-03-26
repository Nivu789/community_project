import { FlipWords } from "./FlipWords"
import Slider from "react-slick";
import { useFetchEventsOfActivity } from "../hooks/useFetchEventsOfActivity";
import moment from "moment";
import { useEffect, useState } from "react";
import { useFetchActivityImages } from "../hooks/useFetchActivityImages";
import { activityDetails } from "./activityDetails";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";


const KarateContent = () => {

  const [refetch] = useState(false)

  const {activityName} = useParams()

  interface DetailsOfActivity {
    title:string,
    faculty1:string,
    faculty2:string,
    faculty1Photo:string,
    faculty2Photo:string
}

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay:true,
        autoplaySpeed:5000,
      };

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

      console.log(activityName)
      const {eventData,eventsLoading} = useFetchEventsOfActivity(activityName||"")

      const {images} = useFetchActivityImages(activityName+"/",refetch,activityName)

      

    const [detailsOfActivity,setDetailsOfActivity] = useState<DetailsOfActivity>({
      title:"",
      faculty1:"",
      faculty2:"",
      faculty1Photo:"",
      faculty2Photo:""
        
    })

    useEffect(()=>{
      switch (activityName) {
        case "karate":
          setDetailsOfActivity(activityDetails[1])
          break;
      
        default:
          break;
      }
    },[activityName])
    
    
    
    const words = ["Karate: Discipline, Strength, Spirit","STRIKE WITH PRECISION, DEFEND WITH HONOR"]
  return (
    <>
    <div className="text-4xl bg-black text-white font-Oswald text-center w-full items-center flex justify-around"><img src="/karateLogo.png" alt="" className="w-1/4 h-fit"/>Kempo Karate Do</div>
    <div className="w-full h-14 flex justify-center bg-red-500 relative items-center">
        <FlipWords words={words}/>
    </div>
    <motion.div className="mt-4" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:2}}>
        <div className="bg-black text-white text-2xl p-2">Meet the faculties</div>
        <div className="grid grid-cols-1 lg:h-[800px] h-[400px]">
            <div className="flex relative h-full">
            <div
      className="absolute object-cover w-1/2 h-full object-center"
      style={{
        backgroundImage: "linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 40%), url('/karateMaster.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
              <div className="bg-black w-1/2 z-10 absolute right-0 h-full flex-flex-col">
              
              <div className="h-full relative">
    <div
      className="absolute w-full h-full"
      style={{
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url('/karateMaster2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
    <div className="absolute bottom-0 w-full h-1/4 flex items-center justify-center bg-black text-white p-2" style={{
        background: "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 80%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="font-Oswald text-center lg:text-xl">
        <h2 className="lg:text-7xl text-2xl">Rathnakaran M</h2>
        <h2>7th dan {"(red & white)"}</h2>
        <h2>Academy of asian fighting arts</h2>
        <h2>Mavungal, Anandasram</h2>
      </div>
    </div>
  </div>
              </div>
            </div>
        </div>
    </motion.div>
    <motion.div className="grid lg:grid-cols-3 grid-cols-1 gap-2 w-full h-fit bg-black mt-6 min-h-[600px]" initial={{x:300}} whileInView={{x:0}} viewport={{once:true}} transition={{duration:1}}>
    <div className="h-full px-2">
        <div className="bg-black text-white text-2xl p-2">Upcoming Events</div>
        <div className="slider-container h-full">
          {eventsLoading ? <div role="status" className="flex justify-center items-center h-full">
                              <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                            <span className="sr-only">Loading...</span>
                            </div> 
                            : 

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

    <div className="col-span-1 relative hidden lg:block lg:col-span-2">
        <div className="bg-black text-white text-2xl p-2">Have any queries?</div>
        <img src="/karatebg.jpg" alt="" className="object-cover w-full h-[600px] absolute z-0 opacity-25"/>
        <div className="z-10 inset-0 absolute flex justify-center items-center">
          <h4 className="font-Oswald text-white text-8xl">Reach us at</h4>
        </div>
    </div>

    </motion.div>

    <motion.div className="relative hidden max-sm:block h-[410px] bg-black mt-16" initial={{x:-300}} whileInView={{x:0}} viewport={{once:true}} transition={{duration:2}}>
        <div className="bg-black text-white text-2xl p-2">Have any queries?</div>
        <img src="/karatebg.jpg" alt="" className="object-cover w-full lg:h-[600px] absolute z-0 opacity-25"/>
        <div className="z-10 inset-0 absolute flex justify-center items-center">
          <h4 className="font-Oswald text-white lg:text-8xl text-4xl">Reach us at</h4>
        </div>
    </motion.div>

    <div className="mt-16">
        <div className="bg-black text-white text-2xl p-2">Recent Activities</div>
        <div className="slider-container bg-black">
      <Slider {...settingsImageSection}>
        
          {images && images.length>0 && images.map((image,index)=>(
            <div key={index} className="h-full w-full border-2 border-black"><img src={`https://samskrithibucket.s3.amazonaws.com/${image}`} alt="" className="h-full w-full object-cover object-center"/></div>
          ))}
        
      </Slider>
    </div>
    </div>
    </>
  )
}

export default KarateContent