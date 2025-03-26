import React from 'react'
import { Carousel } from './Carousel'

const KarateCarouselTest = () => {
    const images = [
        
            {
                location:"https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2021/07/Karate-Olympics-Feature.jpg",
                buttonText:"Donate and Volunteer",
              },
              {
                location:"https://contents.mediadecathlon.com/b71745/k$7f96ff05634c13a287fe88d16de36e8a/1920x0/1000pt667/2000xcr1333/PHOTO_INT_BOXES_kata.jpg?format=auto",
                buttonText:"Attend Exclusive Events"
              },
        
    ]

  return (
    <Carousel images={images} singleButton={true} buttonText='Check it out' to={'/activities/karate'}/>
  )
}

export default KarateCarouselTest