import { FlipWords } from "./FlipWords"
import Slider from "react-slick";
import { useFetchEventsOfActivity } from "../hooks/useFetchEventsOfActivity";
import moment from "moment";
import { useEffect, useState } from "react";
import { useFetchActivityImages } from "../hooks/useFetchActivityImages";
import { activityDetails } from "./activityDetails";
import { useParams } from "react-router-dom";


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
      const {eventData} = useFetchEventsOfActivity(activityName||"")

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
    <div className="w-full h-fit flex justify-center bg-red-500 relative">
        <FlipWords words={words}/>
    </div>
    <div  className="mt-4">
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
    </div>
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-2 w-full h-fit bg-black mt-6 min-h-[600px]">
    <div className="h-full px-2">
        <div className="bg-black text-white text-2xl p-2">Upcoming Events</div>
        <div className="slider-container h-full">
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
    </div>
    </div>

    <div className="col-span-1 relative hidden lg:block lg:col-span-2">
        <div className="bg-black text-white text-2xl p-2">Have any queries?</div>
        <img src="/karatebg.jpg" alt="" className="object-cover w-full h-[600px] absolute z-0 opacity-25"/>
        <div className="z-10 inset-0 absolute flex justify-center items-center">
          <h4 className="font-Oswald text-white text-8xl">Reach us at</h4>
        </div>
    </div>

    </div>

    <div className="relative hidden max-sm:block h-[410px] bg-black mt-16">
        <div className="bg-black text-white text-2xl p-2">Have any queries?</div>
        <img src="/karatebg.jpg" alt="" className="object-cover w-full lg:h-[600px] absolute z-0 opacity-25"/>
        <div className="z-10 inset-0 absolute flex justify-center items-center">
          <h4 className="font-Oswald text-white lg:text-8xl text-4xl">Reach us at</h4>
        </div>
    </div>

    <div className="mt-16">
        <div className="bg-black text-white text-2xl p-2">Recent Activities</div>
        <div className="slider-container bg-black">
      <Slider {...settingsImageSection}>
        
          {images && images.length>0 && images.map((image,index)=>(
            <div key={index} className="h-full w-full border-2 border-black"><img src={`https://samskruthibucket.s3.amazonaws.com/${image}`} alt="" className="h-full w-full object-cover object-center"/></div>
            
          ))}
        
      </Slider>
    </div>
    </div>
    </>
  )
}

export default KarateContent