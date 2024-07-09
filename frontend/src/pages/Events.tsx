import axios from 'axios'
import { useEffect } from 'react'
import Container from '../components/Container'
import EventsBlock from '../components/eventsPage/EventsBlock'
import { ToastContainer,toast } from 'react-toastify'

const Events = () => {
  useEffect(()=>{
    axios.get('http://localhost:3000/user/get-events')
    .then((response)=>{
      console.log(response.data.error)
      toast.info(response.data.error)
    })
  },[])

  return (
    <>
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
    />
    <Container>
        <EventsBlock/>
    </Container>
    </>
  )
}

export default Events