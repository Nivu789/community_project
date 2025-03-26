import Container from './Container'
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import logo from '../../public/logo.png'

const Footer = () => {
  return (
    // <Container>
      <div className='grid lg:grid-cols-3 grid-cols-1 h-fit bg-orange-100  lg:pl-12 p-6 mt-16 pl-4'>
        <div className='col-span-1 h-full border-b-2 border-black lg:border-0 p-3 lg:p-0'>
        <div className='flex flex-col h-full justify-between'>
          <div className='flex flex-col gap-2'>
            <div className='text-xl font-bold'>Email us on</div>
            <div className='flex items-center gap-2 lg:text-xl'>
              <MdEmail className='text-orange-800' />
              <div className=' font-semibold text-orange-800 flex'>
                <div>samskrithipullur@gmail.com</div>
                </div>
            </div>
          </div>


          <div className='flex flex-col gap-2'>
            <div className='text-xl font-bold'>Make a visit</div>
              <div className='lg:text-xl font-semibold flex  text-orange-800 flex-col'>
              <span className='flex items-center gap-2'><FaLocationDot/>samskithi pullur,</span>
              <div className='flex flex-col lg:pl-7 pl-6'>
              <span>pulikkal, kasaragod</span> 
              <span>kerala</span>
              </div>
              </div>
          </div>

          <div className='flex flex-col gap-2'>
            <div className='text-xl font-bold'>Contact Us</div>
            <div className='lg:text-lg font-semibold flex  text-orange-800 items-center gap-2'>
              <FaPhone />9778385740
              </div>
          </div>

          </div>

        </div>

        <div className='flex lg:justify-center border-b-2 border-black lg:border-0 p-3 lg:p-0'>
          <div>
          <div className='text-xl font-bold'>
            Quick Links
          </div>
          <div className='flex flex-col text-xl gap-4 mt-3 text-orange-800'>
            <Link to={'/gallery'}>Gallery</Link>
            <Link to={'/events'}>Events</Link>
            <Link to={'/announcements'}>Announcements</Link>
            <Link to={'/contact'}>Contact Us</Link>
          </div>
          </div>

        </div>



        <div className='flex lg:justify-center p-3 lg:p-0 items-center'>
          <div className='flex flex-col items-center'>
          <div className='text-xl font-bold'>
            Socials
          </div>
          <div className='flex text-2xl gap-4 mt-3 text-orange-800'>
            <div><FaInstagram /></div>
            <div><FaXTwitter /></div>
            <div><FaSquareFacebook /></div>
          </div>
          <img src={logo} alt="logo" className='w-1/2' />
          </div>

        </div>

      </div>
    // {/* </Container> */}
  )
}

export default Footer