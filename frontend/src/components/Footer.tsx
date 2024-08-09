import Container from './Container'
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <Container>
    <div className='grid lg:grid-cols-3 h-80 bg-orange-100 lg:gap-28 lg:pl-12 pt-6 mt-16 grid-cols-1 pl-4'>

      <div className=''>
        <div className='text-xl'>Email us on</div>
        <div className='flex items-center gap-2 mt-3'>
          <MdEmail className='lg:text-2xl text-orange-800'/>
          <div className='lg:text-xl font-semibold text-orange-800'>samskrithipullur@gmail.com</div>
          </div>
      </div>

      <div>
        <div className='text-xl'>Make a visit</div>
        <div className='mt-3 lg:text-lg font-semibold flex lg:items-center text-orange-800'><FaLocationDot />samskithi pullur, pulikkal, kasaragod, kerala</div>
      </div>

      <div>
        <div className='text-xl'>
          Socials
        </div>
        <div className='flex text-2xl gap-4 mt-3 text-orange-800'>
            <div><FaInstagram/></div>
            <div><FaXTwitter /></div>
            <div><FaSquareFacebook /></div>
        </div>
        
      </div>

    </div>
    </Container>
  )
}

export default Footer