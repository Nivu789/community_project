import Button from "../Button"
import Carousel from "framer-motion-carousel";

const KarateClass = () => {
    const images = [
        {
            src:"https://www.azcentral.com/gcdn/-mm-/9d776b646fc021facc3d81cff857fb296d34c005/c=0-210-2046-1366/local/-/media/2016/08/05/Phoenix/Phoenix/636059989056791763-image2.JPG"
        },
        {
            src:"https://www.cormierselfdefense.com/csd/wp-content/uploads/2015/04/kids-karate-classes-ma.jpg"
        },
        {
            src:"https://tmmartialarts.com/wp-content/uploads/2024/02/TM-Martial-Arts-kids-program-2.jpg"
        }
    ]

  return (
    <div className="flex flex-col bg-green-700 p-5 mt-5">
        <div className="grid lg:grid-cols-2 gap-3">
            <div>
            <div className="text-xl text-justify">
            We offer premier karate classes for enthusiasts of all ages and skill levels. Our karate program is designed to 
            provide a comprehensive martial arts experience, combining traditional techniques, discipline, and physical 
            fitness in a supportive and engaging environment. We are dedicated to providing a high-quality martial arts experience 
            that empowers our students. Our karate classes are designed to build strength, discipline, and confidence while fostering 
            a sense of community and respect.
            </div>
            <div className="flex justify-start mt-2">
                <Button to="#" text="Enroll Now!"></Button>
            </div>
            </div>
            <div className="lg:w-[600px] lg:h-[400px]">
            <Carousel autoPlay={true} interval={5000} loop={true}>
                {images.map((item, i) => (
                <img
                    draggable="false"
                    src={`${item.src}`}
                    key={i}
                    width="100%"
                    alt=""
                    style={{backgroundSize:"cover",backgroundPosition:"center",height:"100%"}}
                />
                ))}
            </Carousel>
        </div>
            
        </div>
        <div>
        
        </div>
    </div>
  )
    
}

export default KarateClass