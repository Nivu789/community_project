import Container from "../components/Container"
import Gmaps from "../components/Gmaps"
import { MdPhoneInTalk } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { Variants,motion } from "framer-motion";


const ContactUs = () => {

    const cardVariants: Variants = {
        offscreen: {
          x:300 ,
          opacity:0
        },
        onscreen: {
          x: 0,
          rotate: 0,
          opacity:100,
          transition: {
            type: "tween",
            bounce: 0.4,
            duration: 0.8
          }
        }
      };


  return (
    <Container>
    <div className="w-full relative lg:h-[600px]">
        <img src="./talk_with_us.jpeg" alt="" className="object-cover w-full h-full opacity-80"/>
        <motion.div initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: true }}
          variants={cardVariants} 
          className="flex justify-center text-7xl font-Oswald absolute z-10 items-center inset-0 text-white">
            Let's have a talk
        </motion.div>
    </div>
    <div className="grid lg:grid-cols-3 bg-orange-800 lg:h-96">
        <div className="lg:h-full h-96">
            <Gmaps/>
        </div>
        <div className="pl-8 justify-center items-center flex flex-col lg:gap-3 gap-6 max-sm:pt-8">
            <motion.div initial={{y:200}} whileInView={{y:0}}>
            <div className="text-4xl text-white">Meet us</div>
            <div className="text-lg flex flex-col gap-3 mt-4">
                <div className="flex items-center gap-2"><MdPhoneInTalk />Number</div>
                <div className="flex items-center gap-2"><FaLocationArrow />address</div>
            </div>
            </motion.div>
        </div>
        <div className="pl-8 justify-center items-center flex flex-col lg:gap-3 gap-6 mt-4">
            <motion.div initial={{y:200}} whileInView={{y:0}}>
            <div className=" text-white text-4xl flex justify-center">Pitch us</div>
            <div className="text-lg flex flex-col gap-3  mt-4">
            <div className="text-xl">Any queries?</div>
            <div>Email us on <b>samsrithipullur@gmail.com</b></div>
            </div>
            </motion.div>
        </div>
    </div>
    </Container>
  )
}

export default ContactUs