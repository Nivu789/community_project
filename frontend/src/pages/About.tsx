import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import BearerCard from '../components/aboutPageComponents/BearerCard'
import {motion, Variants} from 'framer-motion'

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
            opacity:100,
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
            <div className='flex flex-col items-center gap-6'>
                <div className='text-6xl'>Who are we?</div>
                <motion.div className='text-justify px-6' initial="offscreen" whileInView="onscreen" viewport={{ once: true}} variants={cardVariants}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio cum corrupti voluptates doloribus quia dolores repellat, recusandae unde nulla eaque adipisci, inventore iure beatae rerum non omnis nobis culpa esse?
                    Ullam deserunt enim dolorum mollitia rem laudantium consequatur maxime numquam temporibus asperiores! Alias vero temporibus, cumque laboriosam earum in architecto, nihil animi dolorem rerum totam maiores suscipit odio explicabo natus!
                    Voluptatibus tempora neque, temporibus consectetur, magnam ipsa omnis sit ea in voluptatum accusamus numquam reiciendis obcaecati quod laudantium repudiandae iste laboriosam, impedit voluptate. Nemo optio exercitationem nam vitae, nisi fugit.
                    Soluta, explicabo amet. Necessitatibus, doloribus soluta cumque enim libero eius nesciunt repellendus quos temporibus, veritatis fugiat sunt tempore in sed, dignissimos perspiciatis quibusdam. Reprehenderit officia ipsum blanditiis, ab qui ducimus.
                    Esse harum id sapiente officia cum maiores. Accusamus neque tempora vel at deserunt id eius in necessitatibus impedit iste consectetur hic architecto non praesentium mollitia ducimus similique, facere eaque pariatur!
                    Illum nihil doloremque aperiam quos id repellendus suscipit sequi voluptates aliquid eveniet tempore dolores quibusdam quod minima tempora harum incidunt distinctio eum, beatae, dolore voluptatem? Nobis tempore quod eius voluptatibus?
                    Perferendis at adipisci, amet minus, laudantium dolor sit officia sint voluptatibus aliquam nesciunt cupiditate vero? Alias dicta nam vero recusandae, error quidem tempora debitis reiciendis tempore, deleniti hic nulla? Tempore?
                    Dolores nemo quia consectetur, similique optio quasi delectus facere tempora sit debitis magnam hic velit tempore recusandae obcaecati repellendus porro voluptatibus maxime aliquam corporis dignissimos. Praesentium aperiam a nesciunt placeat.
                    Eos voluptate dolore mollitia ab iusto aut voluptas tempora vel possimus cumque quasi sapiente provident harum obcaecati quod ullam dolorem id, assumenda deleniti dolorum? Quae dolorum asperiores velit molestias corporis.
                    Unde recusandae expedita dignissimos quis ex. Sapiente magni, maiores voluptatum odio fugiat cum architecto recusandae voluptatem ullam aliquid fuga eum, aperiam ex et atque nihil consequuntur? Adipisci repudiandae alias recusandae?
                    Tempora eaque accusamus odio! Laborum nesciunt a illum laudantium aspernatur quaerat adipisci voluptates ullam facere eveniet, blanditiis consectetur animi fugiat, dicta modi? Earum inventore repudiandae cupiditate velit soluta et ut.
                    Voluptates, illum praesentium nesciunt non amet nostrum recusandae quisquam voluptatibus fugiat vitae dolorum nihil. Architecto illum fugit consequatur commodi neque esse, eius tempore vel molestiae, accusantium fuga. Quis, labore facilis!
                    Magnam obcaecati quam commodi illo possimus eos nihil aperiam sunt, veniam incidunt, unde laborum quos, dolore dignissimos. Ipsam libero et aliquid veniam vero, perspiciatis omnis, incidunt, ea quo aperiam ipsum!
                    Ea quibusdam sit quasi aut quae assumenda eligendi optio! Vitae temporibus omnis aperiam delectus saepe voluptatibus accusamus ad iure? Sapiente ad, beatae exercitationem impedit natus labore sequi quia esse voluptas.
                    Vitae, quo expedita, aliquid et odit similique quasi deleniti distinctio facere repudiandae natus ullam eius quae iste asperiores, velit dolorem possimus. Cumque exercitationem ea eum in similique dolore maxime voluptatem.
                    Voluptate est esse officiis nostrum perferendis aspernatur, totam accusamus in necessitatibus unde natus eveniet, aut ducimus repellat sit eaque quidem. Architecto dolorum repellendus magni. Perferendis, aut dignissimos. Vero, dolore ab.
                    Exercitationem autem doloribus laboriosam, ad, sit voluptas iure quos nemo repellendus ab in amet dicta excepturi assumenda quaerat tempore dolore numquam ipsum! Culpa eveniet aliquid quidem dolor necessitatibus alias dolorum?
                    Voluptates fugiat dolores veniam alias nobis quae distinctio aspernatur ab accusantium maiores qui magnam, quibusdam suscipit dicta molestias consectetur excepturi sed! Minus libero, maxime illum voluptatem voluptas sit dicta quidem.
                    Eos quia corporis saepe quas voluptatibus explicabo tempore suscipit rem, quibusdam itaque dolores nobis illo voluptatum at labore. Soluta, voluptatum. Atque distinctio quisquam repudiandae magni harum recusandae quibusdam. Quae, animi.
                    Facilis neque recusandae reprehenderit. Voluptatem nulla, vel provident enim, commodi sunt quas esse soluta accusantium est hic doloribus deserunt dolorum excepturi sit, recusandae error impedit asperiores. Aut molestias asperiores fugiat.
            </motion.div>
            </div>
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