import { FlipWords } from "./FlipWords"
import Slider from "react-slick";
import { useFetchEventsOfActivity } from "../hooks/useFetchEventsOfActivity";
import moment from "moment";
import { useEffect, useState } from "react";
import { useFetchActivityImages } from "../hooks/useFetchActivityImages";
import { activityDetails } from "./activityDetails";
import { useParams } from "react-router-dom";


const DanceContent = () => {

  const [refetch] = useState(false)

  const {activityName} = useParams()

  interface DetailsOfActivity {
    title:string,
    faculty1:string,
    faculty2:string,
    faculty1Photo:string,
    faculty2Photo:string
}

const settingsSideImages = {
  dots: false,
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  waitForAnimate: false,
  autoplay:true,
  autoplaySpeed:5000,
  arrows:false
};

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

      // const {images} = useFetchActivityImages(activityName+"/",refetch,activityName)

      

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
    

    
    const words = ["Dance is the special freedom of imagination","Dance is the hidden language of the soul"]
  return (
    <>
    <div className="relative font-bold text-4xl bg-black text-white font-Oswald text-center w-full items-center flex justify-around h-44">
  <div
    className="absolute inset-0"
    style={{
      backgroundImage:
        "url(https://images.unsplash.com/photo-1642516861669-27011fa2a1fb?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100%",
      backgroundPosition: "center",
      opacity: 0.5, // Adjust the opacity as needed
      zIndex: 0,
    }}
  ></div>
  <div className="relative z-10 font-malayalam">
    ഗീതാഞ്ജലി നൃത്തവിദ്യാലയ൦
  </div>
</div>
    <div className="w-full h-fit flex justify-center bg-red-500 relative">
        <FlipWords words={words}/>
    </div>
    <div  className="mt-4">
        <div className="bg-black text-white text-2xl p-2">Meet the faculties</div>
        <div className="grid grid-cols-2">
            <div className="flex justify-center items-center w-full h-fit py-5">
              <div className="w-72 h-96 border-8 border-yellow-400 shadow-2xl shadow-black">
              <img src="/danceMaster.jpg" alt="" className="object-cover w-full h-full"/>
              </div>
              
            </div>
            <div className="flex flex-col justify-center text-center text-xl font-malayalam">
              <div>തമിഴ് യൂണിവേഴ്സിറ്റിയിൽ നിന്നും ഭരതനാട്യത്തിൽ ബിരുദവും കേരളനടണത്തിൽ ഡോ. ഗുരുഗോപിനാഥ് ട്രസ്റ്റിന്റെ കീഴിൽനിന്നും ഡിപ്ലോമയും പൂർത്തിയാക്കി. 10 വർഷമായി നൃത്ത പരിശീലകനായി തുടരുന്നു.</div>
              <div>ഇപ്പോൾ പുല്ലൂർ സംസ്കൃതി, ചട്ടഞ്ചാൽ, ബെളൂർ (അട്ടേങ്ങാനം), എളേരിതട്ട് എന്നിവിടങ്ങളിൽ ഗീതാഞ്ചലി നൃതാവിദ്യാലയം എന്ന സ്ഥാപനം നടത്തിവരുന്നു. കൂടാതെ കേരളകലാക്ഷേത്രം മുന്നാട്, നാട്യകലാ നൃത്തവിദ്യാലയം പെരിയബസാർ, നാട്യകൈരളി പെരുമ്പള എന്നിവിടങ്ങളിലും പരിശീലനം നൽകി വരുന്നു.</div>
              
            </div>
        </div>
    </div>
    
    <div className="grid grid-cols-2">
      
      <div className="flex justify-center text-center flex-col text-xl font-malayalam px-1">
        <div> 2019 മുതൽ പ്രതിബോധക എന്ന ഡാൻസ് ട്രൂപ്പിലൂടെ RLV ജയപ്രകാശ് നാരായണൻ സാറിന്റെ കീഴിൽ നിരവധി വേദികളിൽ സോളോ, ഗ്രൂപ്പ്‌ പെർഫോമൻസ് അവതരിപ്പിച്ചു വരുന്നു. </div>
        <div> 2018 മുതൽ പുല്ലൂർ കണ്ണാങ്കോട്ട് കാവ് സംസ്കൃതിയിൽ നൃത്തപരിശീലനം ആരംഭിച്ചു. നിരവധി വിദ്യാർഥികൾ പരിശീലനം നേടി വരുന്നു. അരങ്ങേറ്റം കഴിഞ്ഞ വിദ്യാർഥികൾക്ക്‌ നിരവധി വേദികളിൽ പെർഫോമൻസ് ചെയ്യാനുള്ള അവസരവും ലഭിക്കുന്നുണ്ട്</div>
      </div>

      <div className="">
      <div className="slider-container w-full h-96 shadow-2xl shadow-black">
  <Slider {...settingsSideImages} className="w-full h-full">
    <div className="w-full h-96 flex">
      <img src={"/dance1.jpg"} className="object-cover w-full h-full"/>
    </div>
    <div className="w-full h-96 flex">
      <img src={"/dance2.jpg"} className="object-cover w-full h-full"/>
    </div>
    <div className="w-full h-96 flex">
      <img src={"/dance3.jpg"} className="object-cover w-full h-full"/>
    </div>
    <div className="w-full h-96 flex">
      <img src={"/dance4.jpg"} className="object-cover w-full h-full"/>
    </div>
  </Slider>
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

    {/* <div className="mt-16">
        <div className="bg-black text-white text-2xl p-2">Recent Activities</div>
        <div className="slider-container bg-black">
      <Slider {...settingsImageSection}>
        
          {images && images.length>0 && images.map((image,index)=>(
            <div key={index} className="h-full w-full border-2 border-black"><img src={`https://samskruthibucket.s3.amazonaws.com/${image}`} alt="" className="h-full w-full object-cover object-center"/></div>
            
          ))}
        
      </Slider>
    </div>
    </div> */}
    </>
  )
}

export default DanceContent