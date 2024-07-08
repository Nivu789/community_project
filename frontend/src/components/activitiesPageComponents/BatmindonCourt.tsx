import Button from "../Button"
import Carousel from "framer-motion-carousel";


const BatmindonCourt = () => {
    const images = [
        {
            src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQduGX0OIimowiiQITpZqtK0-PVfSnIPWXKA&s"
        },
        {
            src:"https://www.sportex.com.my/images/525202393410AMSPORTEX-Badminton-Mat.jpg"
        },
        {
            src:"https://media.hudle.in/photos/49233"
        }
    ]
  return (
    <div className="flex flex-col bg-green-700 p-5">
        <div className="grid lg:grid-cols-2 gap-3">
        <div className="lg:w-[600px] lg:h-[400px]">
            <Carousel autoPlay={true} interval={4000} loop={true}>
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
            <div>
            <div className="text-xl text-justify">
                A best in class badmindon court where we offer a state-of-the-art synthetic badminton court designed 
                for players of all levels. Our synthetic court provides an exceptional playing experience, combining 
                durability, consistency, and ease of maintenance to ensure you have the best environment for your game.
                Our synthetic badminton court is designed to enhance your playing experience, making every game enjoyable and challenging. 
                Come and experience the difference at Samskrithi – where quality meets excellence in badminton.
            </div>
            <div className="flex justify-end">
                <Button to="#" text="Join today!"></Button>
            </div>
            </div>
            
        </div>
        <div>
        
        </div>
    </div>
    
  )
}

export default BatmindonCourt