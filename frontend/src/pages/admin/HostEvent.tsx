import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import DateRangePicker from '@wojtekmaj/react-daterange-picker'
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';
import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
import Swal from 'sweetalert2'
import axios from 'axios';
import { BASE_URL } from '../../config/config';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import TimeRangePicker from '@wojtekmaj/react-timerange-picker'
import '@wojtekmaj/react-timerange-picker/dist/TimeRangePicker.css';
import 'react-clock/dist/Clock.css';


type ValuePiece = Date | null | string;

type Value = ValuePiece | [ValuePiece, ValuePiece];

type Inputs = {
  title: string
  description: string
  venue:string
  dates:string[]
  seats:string
}

const HostEvent = () => {

  const navigate = useNavigate()

  const localizer = momentLocalizer(moment)

  const [value, onChange] = useState<Value>([new Date(), new Date()]);

  const [time, onChangeTime] = useState<Value>(['10:00', '11:00']);

  const [events,setEvents] = useState([])

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const eventData = {
          ...data,
          dates: value,
          time:time
        };
        console.log('Event Data:', eventData);
        axios.post(`${BASE_URL}/admin/post-event`,{
          eventData
        },{
          headers:{
          Authorization:localStorage.getItem("adminToken")
        }}).then((response)=>{
          if(response.data.error){
            Swal.fire(response.data.error);
            toast.error(response.data.error,{
              onClose:()=>{
                navigate('/admin/signin')}
            })
          }else{
            Swal.fire(response.data.message);
            reset()
          }
        })

      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }
  
  const test = [2024, 6, 11, 10, 0, 0];
  const test2 = new Date(test[0], test[1], test[2], test[3], test[4], test[5])
  console.log(test2)

 useEffect(()=>{
  console.log(new Date(2024, 6, 11, 10, 0, 0))
    axios.get(`${BASE_URL}/admin/get-events`,{
      headers:{
        Authorization:localStorage.getItem("adminToken")
      }
    })
    .then((response)=>{
      const result = response.data.events
      console.log(result)
      const extractedData = result.map((item:{title:string,startDate:[],endDate:[]})=>({
        title:item.title,
        start:new Date(...item.startDate),
        end:new Date(...item.endDate)
      }))
      console.log(extractedData)
      setEvents(extractedData)
    })
 },[handleSubmit,events])

  return (
    <>
    <ToastContainer position="top-right"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      theme="light"
      />
      <div className='text-white p-3 text-4xl'>
        Host event
      </div>
      <div className='text-white text-4xl grid grid-cols-8'>
        <div className='col-span-2'>
          <div className='flex flex-col p-2'>
            <form className="max-w-fit pl-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="relative z-0 w-full mb-5 group">
                <input type="text" {...register("title",{required:true})} name="title" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
              </div>
              <div className="relative z-0 w-full mb-5 text-sm">
                <textarea {...register("description")} id='floating_password' name='description' placeholder='enter the description' className='text-black text-md w-full'></textarea>
                {/* <input type="text-area" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required /> */}

              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input {...register("venue")} type="text" name="venue" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Venue</label>
              </div>
              <div>
                
                  <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select seat option</label>
                  <select {...register("seats")} id="countries" name="seats" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>open to all</option>
                    <option value="less than 50">less than 50</option>
                    <option value="less than 100">less than 100</option>
                    <option value="less than 200">less than 200</option>
                  </select>
                
              </div>
              <div className="grid md:grid-cols-2 md:gap-6 mt-6 mb-2">

                <div className='bg-white text-sm w-fit p-1'>
                  <DateRangePicker onChange={onChange} value={value} className="text-black text-sm" required/>
                </div>

              </div>

              <div className="grid md:grid-cols-2 md:gap-6 mt-6 mb-2">

                <div className='bg-white text-sm w-fit p-1'>
                <TimeRangePicker onChange={onChangeTime} value={time} className="text-black text-sm"/>
                </div>
                
              </div>
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

          </div>
        </div>

        <div className="h-[800px] overflow-auto col-span-6 px-5 bg-zinc-400">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            className="text-black"
            popup
          />
        </div>

      </div>
    </>
  )
}

export default HostEvent