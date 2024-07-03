import './App.css'
import { Routes,Route, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import Wrapper from './components/Wrapper'


function App() {

  return (
    <>
    <div>
      <Routes>
        <Route path='/' element={<Wrapper/>}>
            <Route index path='home' element={<Home/>}></Route>
        </Route>
      </Routes>
    </div>
    </>
  )
}

export default App
