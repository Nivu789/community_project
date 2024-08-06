
import { Carousel } from './Carousel'

const DanceCarousel = () => {
    const images = [
        
            {
                location:"https://www.thestatesman.com/wp-content/uploads/2021/06/QT-Rekha-Raju-Indian-Classical-Dancer.jpg",
                buttonText:"Donate and Volunteer",
              },
              {
                location:"https://neelkamal563149445.wordpress.com/wp-content/uploads/2021/01/1575706107_image2.jpg?w=960",
                buttonText:"Attend Exclusive Events"
              },
        
    ]

  return (
    <Carousel images={images} singleButton={true} buttonText='Check it out'/>
  )
}

export default DanceCarousel