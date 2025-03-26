import { FlipWords } from "./FlipWords"
import Slider from "react-slick";
import { useFetchEventsOfActivity } from "../hooks/useFetchEventsOfActivity";
import moment from "moment";
import { useEffect, useState } from "react";
import { useFetchActivityImages } from "../hooks/useFetchActivityImages";
import { activityDetails } from "./activityDetails";
import { useParams } from "react-router-dom";
import {motion, transform, Variants} from 'framer-motion'


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
    

    function scrollToSection() {
      const isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed
      const targetSection = isMobile ? document.getElementById('ReachSectionMobile') : document.getElementById('ReachSectionDesktop');
      
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
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
    <div className="w-full h-14 flex justify-center bg-black relative items-center">
        <FlipWords words={words}/>
    </div>
    <div  className="mt-4">
        <div className="bg-purple-700 text-white text-2xl p-2">Meet the faculties</div>
        <div className="grid lg:grid-cols-2">
            <div className="flex justify-center items-center w-full h-fit py-5">
              <motion.div className="w-72 h-96 border-8 border-yellow-400 shadow-2xl shadow-black" initial={{x:-300}} whileInView={{x:0}} viewport={{once:true}} transition={{duration:0.5}}>
              <img src="/danceMaster.jpg" alt="" className="object-cover w-full h-full"/>
              </motion.div>
              
            </div>
            <motion.div className="flex flex-col justify-center text-center lg:text-xl text-lg font-malayalam max-sm:mt-9 max-sm:px-6 max-md:px-6" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:2}}>
              <div>തമിഴ് യൂണിവേഴ്സിറ്റിയിൽ നിന്നും ഭരതനാട്യത്തിൽ ബിരുദവും കേരളനടണത്തിൽ ഡോ. ഗുരുഗോപിനാഥ് ട്രസ്റ്റിന്റെ കീഴിൽനിന്നും ഡിപ്ലോമയും പൂർത്തിയാക്കി. 10 വർഷമായി നൃത്ത പരിശീലകനായി തുടരുന്നു.</div>
              <div>ഇപ്പോൾ പുല്ലൂർ സംസ്കൃതി, ചട്ടഞ്ചാൽ, ബെളൂർ (അട്ടേങ്ങാനം), എളേരിതട്ട് എന്നിവിടങ്ങളിൽ ഗീതാഞ്ചലി നൃതാവിദ്യാലയം എന്ന സ്ഥാപനം നടത്തിവരുന്നു. കൂടാതെ കേരളകലാക്ഷേത്രം മുന്നാട്, നാട്യകലാ നൃത്തവിദ്യാലയം പെരിയബസാർ, നാട്യകൈരളി പെരുമ്പള എന്നിവിടങ്ങളിലും പരിശീലനം നൽകി വരുന്നു.</div>
              
            </motion.div>
        </div>
    </div>
    
    <div className="grid lg:grid-cols-2 grid-cols-1 max-sm:grid-rows-2 px-2">
      
      <motion.div className="flex justify-center text-center flex-col lg:text-xl text-lg font-malayalam px-1 max-sm:px-4" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:2}}>
      
        <div> 2019 മുതൽ പ്രതിബോധക എന്ന ഡാൻസ് ട്രൂപ്പിലൂടെ RLV ജയപ്രകാശ് നാരായണൻ സാറിന്റെ കീഴിൽ നിരവധി വേദികളിൽ സോളോ, ഗ്രൂപ്പ്‌ പെർഫോമൻസ് അവതരിപ്പിച്ചു വരുന്നു. </div>
        <div> 2018 മുതൽ പുല്ലൂർ കണ്ണാങ്കോട്ട് കാവ് സംസ്കൃതിയിൽ നൃത്തപരിശീലനം ആരംഭിച്ചു. നിരവധി വിദ്യാർഥികൾ പരിശീലനം നേടി വരുന്നു. അരങ്ങേറ്റം കഴിഞ്ഞ വിദ്യാർഥികൾക്ക്‌ നിരവധി വേദികളിൽ പെർഫോമൻസ് ചെയ്യാനുള്ള അവസരവും ലഭിക്കുന്നുണ്ട്</div>
        
      </motion.div>

      <motion.div className="" initial={{x:300}} whileInView={{x:0}} viewport={{once:true}} transition={{duration:0.5}}>
      <div className="slider-container w-full h-96 shadow-2xl shadow-black" >
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
      </motion.div>



    </div>

    <div className="relative lg:text-8xl text-4xl text-center flex flex-col w-full justify-center items-center mt-24 font-Oswald">
    <div
        className="absolute w-full h-full bg-purple-200 transform rotate-3 z-0"
        style={{ top: '50%', transform: 'translateY(-50%) rotate(-2deg)' }}
    />
    <motion.div className="relative z-10" animate={{scale:1.1}} transition={{duration:2,repeat: Infinity, repeatType: "reverse"}}>
        <a href="#ReachSection" onClick={scrollToSection}>Interested in knowing more?</a>
    </motion.div>
</div>
    
    <div className="mt-36">
        <div className="bg-purple-700 text-white text-2xl p-2">Recent Activities</div>
        <div className="slider-container bg-black h-96">
      <Slider {...settingsImageSection} className="h-96">
        
          {images && images.length>0 && images.map((image,index)=>(
            <div key={index} className="h-96 w-full border-2 border-white"><img src={`https://samskrithibucket.s3.amazonaws.com/${image}`} alt="" className="h-full w-full object-cover object-center"/></div>
            
          ))}
        
      </Slider>
    </div>
    </div>

    <motion.div className="grid lg:grid-cols-3 grid-cols-1 gap-0 w-full h-fit bg-black mt-32 min-h-[600px]" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:2}}>
    <div className="h-full">
        <div className="bg-purple-700 text-white text-2xl py-2 w-full text-center">Upcoming Events</div>
        <div className="slider-container h-full px-2">
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

    <div className="col-span-1 relative hidden lg:block lg:col-span-2" id="ReachSectionDesktop">
        <div className="bg-purple-700 text-white text-2xl p-2">Got any queries?</div>
        <img src="/reach_dance.jpg" alt="" className="object-cover w-full h-[550px] absolute z-0 opacity-50"/>
        <div className="z-10 inset-0 absolute flex justify-center items-center">
          <h4 className="font-Oswald text-white text-9xl">Reach us at</h4>
        </div>
    </div>

    </motion.div>

    

    <div className="relative hidden max-sm:block h-[410px] bg-black mt-16" id="ReachSectionMobile">
        <div className="bg-purple-700 text-white text-2xl p-2">Got any queries?</div>
        <img src="/reach_dance.jpg" alt="" className="object-cover w-full h-[360px] absolute z-0 opacity-25"/>
        <div className="z-10 inset-0 absolute flex justify-center items-center">
          <h4 className="font-Oswald text-white lg:text-8xl text-4xl">Reach us at</h4>
        </div>
    </div>

    
    </>
  )
}

export default DanceContent