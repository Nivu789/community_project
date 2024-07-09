import './App.css'
import { Routes,Route, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import Wrapper from './components/Wrapper'
import Activities from './pages/Activities'
import Events from './pages/Events'
import Calender from './components/eventsPage/Calender'
import Dashboard from './pages/admin/Dashboard'
import Signin from './pages/admin/Signin'
import AdminLayout from './components/AdminLayout'
import MemberSignin from './pages/member/MemberSignin'




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
            <Route path='member-login' element={<MemberSignin/>}></Route>
        </Route>
        <Route path='/admin' element={<AdminLayout/>}>
            <Route path='dashboard' element={<Dashboard/>}></Route>
        </Route>
          <Route path='/admin/signin' element={<Signin/>}></Route>
      </Routes>
    </div>
    </>
  )
}

export default App
