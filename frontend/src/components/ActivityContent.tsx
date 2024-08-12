import { FlipWords } from "./FlipWords"
import Slider from "react-slick";
import { useFetchEventsOfActivity } from "../hooks/useFetchEventsOfActivity";
import moment from "moment";
import { useEffect, useState } from "react";
import { useFetchActivityImages } from "../hooks/useFetchActivityImages";
import { activityDetails } from "./activityDetails";
import { useParams } from "react-router-dom";


const ActivityContent = () => {

  const [refetch,setRefetch] = useState(false)

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
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        autoplay:true,
        autoplaySpeed:2000,
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
        <div className="grid grid-cols-2">
            <div><img src="/karateLogo.png" alt="" /><div>{detailsOfActivity.faculty1}</div></div>
            <div><img src="/karateLogo.png" alt="" /><div>{detailsOfActivity.faculty2}</div></div>
        </div>
    </div>
    <div className="grid grid-cols-3 gap-2 w-full h-fit bg-red-500">
    <div className="h-full">
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

    <div className="col-span-2">
        <div className="bg-black text-white text-2xl p-2">Have any queries?</div>
        <div>
          <h4>Reach us on</h4>
        </div>
    </div>

    </div>

    <div>
        <div>Recent Activities</div>
        <div className="slider-container bg-red-500">
      <Slider {...settingsImageSection}>
        
          {images && images.length>0 && images.map((image,index)=>(
            <div key={index} className="h-96 w-96"><img src={`https://samskruthibucket.s3.amazonaws.com/${image}`} alt="" className="h-full w-full object-cover object-center"/></div>
            
          ))}
        
      </Slider>
    </div>
    </div>
    </>
  )
}

export default ActivityContent