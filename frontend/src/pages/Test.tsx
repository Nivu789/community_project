import Container from "../components/Container"
import KarateCarouselTest from "../components/KarateCarouselTest"
import { PartOneTest } from "../components/PartOneTest"
import { PartTwoTest } from "../components/PartTwoTest"
import Activities from "./Activities"

const Card1 = [
    {
      id: 1,
    content: <KarateCarouselTest/>,
    className: "h-full col-span-1",
    thumbnail: "https://the.ismaili/sites/default/files/styles/carousel_banner/public/ys_11.jpg?itok=YrZQ5lHq",
    }
  ]

  const Card2 = [
    {
        id: 2,
      content: <KarateCarouselTest/>,
      className: "h-full w-full",
      thumbnail: "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2021/07/Karate-Olympics-Feature.jpg",
      },
      {
        id: 3,
      content: <Activities/>,
      className: "h-full",
      thumbnail: "https://www.aluxurytravelblog.com/wp-content/uploads/2022/07/Odissi.jpg",
      },
  ]


const Test = () => {
  return (
    <Container>
    <div className="grid grid-cols-2">
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

export default Test