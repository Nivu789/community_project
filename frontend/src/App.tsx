import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Wrapper from './components/Wrapper'
import Activities from './pages/Activities'
import Events from './pages/Events'
import Calender from './components/eventsPage/Calender'
import Dashboard from './pages/admin/Dashboard'
import Signin from './pages/admin/Signin'
import AdminLayout from './components/AdminLayout'
import MemberSignin from './pages/member/MemberSignin'
import Protector from './components/Protector'
import IsAdminAuthenticated from './components/IsAdminAuthenticated'
import SetEvents from './pages/admin/SetEvents'
import HostEvent from './pages/admin/HostEvent'
import CropImage from './components/adminComponents/CropImage'
import EditEvent from './pages/admin/EditEvent'
import Gallery from './pages/admin/Gallery'
import UploadFiles from './pages/admin/UploadFiles'
import Folder from './pages/admin/Folder'
import MemberGallery from './pages/member/MemberGallery'
import MemberFolder from './pages/member/MemberFolder'


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
            <Route path='gallery' element={<MemberGallery/>}></Route>
            <Route path='gallery/:folderName' element={<MemberFolder/>}></Route>
        </Route>
        <Route path='/admin' element={<AdminLayout/>}>
            <Route path='dashboard' element={<Protector><Dashboard/></Protector>}>
                <Route path='events' element={<Protector><SetEvents/></Protector>}></Route>
                <Route path='host-event' element={<Protector><HostEvent/></Protector>}></Route>
                <Route path='crop' element={<Protector><CropImage/></Protector>}></Route>
                <Route path='edit-event/:id' element={<Protector><EditEvent/></Protector>}></Route>
                <Route path='gallery' element={<Protector><Gallery/></Protector>}></Route>
                <Route path='gallery/:folderName' element={<Protector><Folder/></Protector>}></Route>
            </Route>
        </Route>
          <Route path='/admin/signin' element={<IsAdminAuthenticated><Signin/></IsAdminAuthenticated>}></Route>
      </Routes>
    </div>
    </>
  )
}

export default App
