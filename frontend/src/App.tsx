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
import About from './pages/About'
import Announcements from './pages/admin/Announcements'
import AllAnnouncement from './components/homeComponents/AllAnnouncement'
import Test from './pages/Test'
import ContactUs from './pages/ContactUs'
import FarmersCommittee from './pages/committeePages/Committee'
import CommitteeManagement from './pages/admin/CommitteeManagement'
import Activity from './pages/member/Activity'
import ActivityManagement from './pages/admin/ActivityManagement'
import SideBarContextAdminProvider from './contexts/SideBarContextAdmin'



function App() {

  const Card = [
    {
      id: 1,
    content: <Activities/>,
    className: "h-full col-span-1",
    thumbnail: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
    content: <Activities/>,
    className: "h-1/2 w-full",
    thumbnail: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
    content: <Activities/>,
    className: "h-1/2",
    thumbnail: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
    content: <Activities/>,
    className: "h-1/2",
    thumbnail: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
  ]

  return (
    <>
    <div> 
      <Routes>
        <Route path='/' element={<Wrapper/>}>
            <Route index path='home' element={<Home/>}></Route>
            <Route path='activities' element={<Activities/>}></Route>
            <Route path='activities/:activityName' element={<Activity/>}></Route>
            <Route path='events' element={<Events/>}></Route>
            <Route path='aboutus' element={<About/>}></Route>
            <Route path='events/event-calender' element={<Calender/>}></Route>
            <Route path='member-login' element={<MemberSignin/>}></Route>
            <Route path='gallery' element={<MemberGallery/>}></Route>
            <Route path='gallery/:folderName' element={<MemberFolder/>}></Route>
            <Route path='allannouncements' element={<AllAnnouncement/>}></Route>
            <Route path='test' element={<Test/>}></Route>
            <Route path='contactus' element={<ContactUs/>}></Route>
            <Route path='committee/:committeeName' element={<FarmersCommittee/>}></Route>
        </Route>
        <Route path='/admin' element={<AdminLayout/>}>
            <Route path='dashboard' element={<Protector><Dashboard/></Protector>}>
                <Route path='events' element={<Protector><SetEvents/></Protector>}></Route>
                <Route path='host-event' element={<Protector><HostEvent/></Protector>}></Route>
                <Route path='crop' element={<Protector><CropImage/></Protector>}></Route>
                <Route path='edit-event/:id' element={<Protector><EditEvent/></Protector>}></Route>
                <Route path='gallery' element={<Protector><Gallery/></Protector>}></Route>
                <Route path='gallery/:folderName' element={<Protector><Folder/></Protector>}></Route>
                <Route path='announcements' element={<Protector><Announcements/></Protector>}></Route>
                <Route path='committee/:committeeName' element={<Protector><CommitteeManagement/></Protector>}></Route>
                <Route path='activity/:activityName' element={<Protector><ActivityManagement/></Protector>}></Route>
            </Route>
        </Route>
        
          <Route path='/admin/signin' element={<IsAdminAuthenticated><Signin/></IsAdminAuthenticated>}></Route>
      </Routes>
    </div>
    </>
  )
}

export default App
