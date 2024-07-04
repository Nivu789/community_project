import BottomSection from "../components/BottomSection"
import Container from "../components/Container"
import IntroSection from "../components/IntroSection"
import MidSection from "../components/MidSection"


const Home = () => {

  return (
    <>
        <Container>
            <IntroSection/>
        </Container>
        <Container>
            <MidSection/>
        </Container>
        <Container>
            <BottomSection/>
        </Container>
    </>   
        
  )
}

export default Home