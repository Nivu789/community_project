import BottomSection from "../components/homeComponents/BottomSection"
import Container from "../components/Container"
import IntroSection from "../components/homeComponents/IntroSection"
import MidSection from "../components/homeComponents/MidSection"


const Home = () => {

  return (
    <>
        <Container>
        <IntroSection/>
            
        </Container>
        <Container>
            <MidSection/>
        </Container>
        {/* <Container>
        <BottomSection/>
        
        </Container> */}
    </>   
        
  )
}

export default Home