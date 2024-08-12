import ActivityContent from "../../components/ActivityContent"
import Container from "../../components/Container"
import { useParams } from "react-router-dom"

const Activity = () => {
    const {activityName} = useParams()
  return (
    <Container>
        <ActivityContent/>
    </Container>
  )
}

export default Activity