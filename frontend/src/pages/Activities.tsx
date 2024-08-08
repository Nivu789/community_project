import BatmindonCourt from "../components/activitiesPageComponents/BatmindonCourt"
import KarateClass from "../components/activitiesPageComponents/KarateClass"
import Container from "../components/Container"
import DanceCarousel from "../components/DanceCarousel"
import KarateCarouselTest from "../components/KarateCarouselTest"
import { PartOneTest } from "../components/PartOneTest"
import { PartThreeTest } from "../components/PartThreeTest"
import { PartTwoTest } from "../components/PartTwoTest"
import ShuttleCarousel from "../components/ShuttleCarousel"



const Activities = () => {

  const Card1 = [
    {
      id: 1,
    content: <ShuttleCarousel/>,
    className: "h-full col-span-1",
    thumbnail: "https://the.ismaili/sites/default/files/styles/carousel_banner/public/ys_11.jpg?itok=YrZQ5lHq",
    cardText:"shuttle"
    },
    {
      id: 5,
    content: <DanceCarousel/>,
    className: "h-1/2",
    thumbnail: "https://artiumacademy.mo.cloudinary.net/v1n/updated-Chitra-1-min.webp",
    cardText:"music",
    textMargin:380
    },
  ]

  const Card2 = [
    {
        id: 2,
      content: <KarateCarouselTest/>,
      className: "h-full w-full",
      thumbnail: "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2021/07/Karate-Olympics-Feature.jpg",
      cardText:"karate"
      },
      {
        id: 3,
      content: <DanceCarousel/>,
      className: "h-full",
      thumbnail: "https://www.aluxurytravelblog.com/wp-content/uploads/2022/07/Odissi.jpg",
      cardText:"Dance"
      },
      {
        id: 4,
      content: <KarateCarouselTest/>,
      className: "h-full w-full",
      thumbnail: "https://onlineaccentspokenenglish.com/wp-content/uploads/2018/09/online-accent-spoken-english-classes-bangalore-institute.jpg",
      cardText:"spoken english"
      },
  ]



  
  return (
    <Container>
    <div className="grid lg:grid-cols-2 p-2 bg-orange-100">
        <div className="">
            <PartOneTest cards={Card1}/>
        </div>
        <div className="">
            <PartTwoTest cards={Card2}/>
        </div>
    </div>
    </Container>
  )
}

export default Activities