import Container from "../components/Container"
import Gmaps from "../components/Gmaps"
import { Variants, motion } from "framer-motion";


const ContactUs = () => {

  const cardVariants: Variants = {
    offscreen: {
      x: 300,
      opacity: 0
    },
    onscreen: {
      x: 0,
      rotate: 0,
      opacity: 100,
      transition: {
        type: "tween",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };


  return (
    // <Container>
    <>
      <div className="w-full relative lg:h-[600px]">
        <img src="./talk_with_us.jpeg" alt="" className="object-cover w-full h-full opacity-80" />
        <motion.div initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: true }}
          variants={cardVariants}
          className="flex justify-center text-7xl font-Oswald absolute z-10 items-center inset-0 text-white">
          Let's have a talk
        </motion.div>
      </div>
      <div className="grid lg:grid-cols-2 bg-orange-800 lg:h-96 w-full">
        <div className="lg:h-full h-96">
          <Gmaps />
        </div>

        <div className="h-full w-full bg-orange-800">
        <section className="w-full h-full p-2">
          <div className="px-4">
            <form action="#" className="space-y-8">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                <input type="email" id="email" className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                <input type="text" id="subject" className="block p-3 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your message</label>
                <textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
              </div>
              <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-orange-400 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
            </form>
          </div>
        </section>
        </div>
      </div>
      </>

    // </Container>
  )
}

export default ContactUs