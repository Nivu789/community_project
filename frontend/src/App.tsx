import './App.css'
import { Routes,Route, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import Wrapper from './components/Wrapper'
import Activities from './pages/Activities'
import Events from './pages/Events'
import Calender from './components/eventsPage/Calender'



function App() {

  return (
    <>
    <div>
      <Routes>
        <Route path='/' element={<Wrapper/>}>
            <Route index path='home' element={<Home/>}></Route>
            <Route path='activities' element={<Activities/>}></Route>
            <Route path='events' element={<Events/>}></Route>
            <Route path='events/event-calender' element={<Calender/>}></Route>
        </Route>
      </Routes>
    </div>
    </>
  )
}

export default App
