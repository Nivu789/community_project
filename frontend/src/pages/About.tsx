import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import BearerCard from '../components/aboutPageComponents/BearerCard'
import {motion, Variants} from 'framer-motion'
import MySlider from '../components/HistorySlider'

const About = () => {
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

      const mainMembers: Variants = {
        offscreen: {
          y:300 ,
          opacity:0
        },
        onscreen: {
          y: 0,
          rotate: 0,
          opacity:100,
          transition: {
            type: "tween",
            bounce: 0.4,
            duration: 0.8
          }
        }
      };

      const experiencedVariants:Variants = {
        offscreen: {
            x:-300 ,
            opacity:0
          },
          onscreen: {
            x: 0,
            rotate: 0,
            opacity:1,
            transition: {
              type: "tween",
              bounce: 0.4,
              duration: 0.8
            }
          }
      }

      const newMembers:Variants = {
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
      }

      const [textBgColor] = useState<string | string[]>(["orange-800","blue-300","orange-400"])
      const [color,setColor] = useState("")
      const [index,setIndex] = useState(0)
      useEffect(()=>{
        const interval = setInterval(() => {
          setColor(textBgColor[index]);
          if(index==textBgColor.length-1){
            setIndex(0)
          }else{
            setIndex(index+1)
          }
        }, 1000);
        console.log(color)
        return () => clearInterval(interval)
      },[index])


    return (
        <Container>
          
            <div className='flex flex-col items-center gap-10'>
                <div className='lg:text-5xl text-2xl font-bold'>സംസ്കൃതി പുല്ലൂർ – ഒരു ആമുഖം</div>
                <motion.div className='lg:text-justify text-center px-6 font-bold' initial="offscreen" whileInView="onscreen" viewport={{ once: true}} variants={cardVariants}>
                "സാംസ്കാരികം ഒരു ജനതയുടെ ആത്മാവ് ആണ്" ഈ ആശയം മുൻനിർത്തിക്കൊണ്ട് സാംസ്കാരിക വളർച്ചക്കും സാമൂഹിക 
                ഉണർവിനും സജീവമായ സംഭാവന നൽകി വരുന്ന കാസർഗോഡ് ജില്ലയിൽ പുല്ലൂർ - പെരിയ പഞ്ചായത്തിൽ പുല്ലൂർ എന്ന 
                സ്ഥലത്ത് പ്രവർത്തിക്കുന്ന ഒരു പ്രമുഖ സംഘടനയാണ്  "സംസ്കൃതി, പുല്ലൂർ".സംഘടനയുടെ ലക്ഷ്യവും പ്രവർത്തനങ്ങളും
                "സംസ്കൃതി, പുല്ലൂർ" എന്ന സംഘടന കലയും സാഹിത്യവും പരമ്പരാഗത കലാരൂപങ്ങളും സംരക്ഷിക്കുകയും പ്രോത്സാഹിപ്പിക്കുകയും ചെയ്യുന്നു. 
                ഗ്രാമീണ നവോത്ഥാനത്തിന് പിന്തുണ നൽകുന്ന നിരവധി സാംസ്കാരിക പരിപാടികൾ, കലാ-കായിക മത്സരങ്ങൾ  സംഘടനയുടെ 
                നേതൃത്വത്തിൽ സംഘടിപ്പിക്കപ്പെടുന്നു.
            </motion.div>
            </div>
            
            {/* <div className='flex flex-col gap-6 items-center mt-10'>
              <h3 className='text-2xl font-bold'>നമ്മുടെ ചരിത്രം</h3>
            </div>
              <MySlider/> */}

            <motion.div initial="offscreen" whileInView="onscreen"  viewport={{once:true}} variants={mainMembers} className='flex lg:justify-around w-full mt-12 lg:flex-row flex-col justify-center h-fit items-center gap-12'>
                <div className='w-72 h-fit lg:h-96 text-center flex flex-col'>
                  <img src="/presidentsamskrithi.png" alt="" className='object-cover w-full h-full object-center'/>
                  <div className='text-center'>
                  <p className='font-bold text-orange-200 bg-orange-800 mt-2 py-5'>PRESIDENT<p className='font-bold text-white'>RATHNAKARAN V V</p></p>
                  
                  </div>
                </div>
                <div className='w-72 h-fit lg:h-96 text-center'>
                  <img src="/secretarysamskrithi.png" alt="" className='object-cover w-full h-full object-center'/>
                  <div className='text-center bg-orange-300'>
                  <p className='font-bold text-orange-200 bg-orange-800 mt-2 py-5'>SECRETARY<p className='font-bold text-white'>SASI A T</p></p>
                  
                  </div>
                </div>
                <div className='w-72 h-fit lg:h-96 text-center'>
                  <img src="/tresurersamskrithi.png" alt="" className='object-cover w-full h-full object-center'/>
                  <div className='text-center bg-orange-300'>
                  <p className='font-bold text-orange-200 bg-orange-800 mt-2 py-5'>TRESURER<p className='font-bold text-white'>UNNIKRISHNAN V V</p></p>
                  </div>
                </div>
            </motion.div>
            <div className='lg:flex justify-around w-full h-fit bg-orange-200 mt-8 text-xl py-4 hidden'>
                
            </div>

            <motion.div initial="offscreen" whileInView="onscreen"  viewport={{once:true}} variants={mainMembers} className='flex lg:justify-around w-full mt-32 lg:flex-row flex-col justify-center h-fit items-center gap-6'>
                <div className='w-72 h-fit lg:h-96 text-center flex flex-col'>
                  <img src="/vicePresident1.jpg" alt="" className='object-cover w-full h-full object-center'/>
                  <div className='text-center'>
                  <p className='font-bold text-orange-200 bg-orange-800 mt-2 py-5'>VICE PRESIDENT<p className='font-bold text-white'>BALAKRISHNAN</p></p>
                  
                  </div>
                </div>
                <div className='w-72 h-fit lg:h-96 text-center flex flex-col'>
                  <img src="/vicePresident2.png" alt="" className='object-cover w-full h-full object-center'/>
                  <div className='text-center'>
                  <p className='font-bold text-orange-200 bg-orange-800 mt-2 py-5'>VICE PRESIDENT<p className='font-bold text-white'>SASIDHARAN K</p></p>
                  
                  </div>
                </div>
                <div className='w-72 h-fit lg:h-96 text-center'>
                  <img src="/jointSecretary1.png" alt="" className='object-cover w-full h-full object-center'/>
                  <div className='text-center bg-orange-300'>
                  <p className='font-bold text-orange-200 bg-orange-800 mt-2 py-5'>JOINT SECRETARY<p className='font-bold text-white'>PRAMOD</p></p>
                  </div>
                </div>
                <div className='w-72 h-fit lg:h-96 text-center'>
                  <img src="/jointSecretary2.png" alt="" className='object-cover w-full h-full object-center'/>
                  <div className='text-center bg-orange-300'>
                  <p className='font-bold text-orange-200 bg-orange-800 mt-2 py-5'>JOINT SECRETARY<p className='font-bold text-white'>GOPI KARAKODE</p></p>
                  </div>
                </div>
            </motion.div>
            <div className='lg:flex justify-around w-full h-fit bg-orange-200 mt-8 text-xl py-4 hidden'>
                
            </div>

            <div className='flex flex-col mt-52 items-center'>
                <motion.div className={`text-2xl font-semibold text-center px-2 p-3 ${color === "orange-800" ? "bg-orange-800 text-white" : color ==="blue-300"?"bg-blue-800 text-white" : color ==="orange-400" ? "bg-orange-500 text-white":""} shadow-lg`} initial="offscreen" whileInView="onscreen" viewport={{ once: true}} variants={experiencedVariants}>EXECUTIVE MEMBERS</motion.div>
                <motion.div className='lg:border-2 h-fit grid lg:grid-cols-3 p-2 mt-12 w-full bg-orange-200 font-bold' initial="offscreen" whileInView="onscreen" viewport={{ once: true}} variants={experiencedVariants}>
                   <BearerCard name='KANNAN' image='./member1.png'/> 
                   <BearerCard name='VINOD' image='./member2.png'/> 
                   <BearerCard name='MURALI KRISHNAN' image='./member3.png'/> 
                   <BearerCard name='PRAVEEN' image='./member4.png'/> 
                   <BearerCard name='BASKARAN' image='./member5.png'/> 
                   <BearerCard name='KRISHNAN' image='./member6.png'/> 
                   <BearerCard name='ASHOKAN' image='./member7.png'/> 
                   <BearerCard name='SURESH KUMAR N' image='./member8.png'/> 
                   <BearerCard name='NARAYANAN V' image='./member9.png'/> 
                   <BearerCard name='SANTHOSH V V' image='./member10.png'/> 
                   <BearerCard name='SHARATH' image='./member11.png'/> 
                </motion.div>
            </div>

            {/* <div className='flex flex-col mt-32 items-center'>
                <div className='text-2xl font-semibold text-center px-2'>The fresh faces bringing new energy and ideas to the Samskrithi, ready to contribute and build upon its strong foundation</div>
                <motion.div className='w-3/4 lg:border-2 h-fit grid lg:grid-cols-3 p-2 mt-12' initial="offscreen" whileInView="onscreen" viewport={{ once: true}} variants={newMembers}>
                   <BearerCard/> 
                   <BearerCard/> 
                   <BearerCard/> 
                   <BearerCard/> 
                   <BearerCard/> 
                   <BearerCard/> 
                </motion.div>
            </div> */}



        </Container>
    )
}

export default About