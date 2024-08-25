
import { Carousel } from './Carousel'

const ShuttleCarousel = () => {
    const images = [
        
            {
                location:"https://content.jdmagicbox.com/comp/def_content/badminton-courts/6-badminton-courts-4-6f9mp.jpg",
                buttonText:"Donate and Volunteer",
              },
              {
                location:"https://www.playspots.in/wp-content/uploads/2021/04/YUscl8rGb6.jpg",
                buttonText:"Attend Exclusive Events"
              },
        
    ]

  return (
    <Carousel images={images} singleButton={true} buttonText='Check it out' to={'/activities/batmindon'}/>
  )
}

export default ShuttleCarousel