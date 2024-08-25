import ActivityContent from "../../components/ActivityContent"
import Container from "../../components/Container"
import { useParams } from "react-router-dom"
import DanceContent from "../../components/DanceContent"
import KarateContent from "../../components/ActivityContent"
import ShuttleContent from "../../components/ShuttleContent"

const Activity = () => {
    const {activityName} = useParams()
  return (
    <>
    <Container>
        {activityName === "karate" && <KarateContent/>}
        {activityName === "dance" && <DanceContent/>}
        {activityName === "batmindon" && <ShuttleContent/>}
    </Container>
    </>
  )
}

export default Activity