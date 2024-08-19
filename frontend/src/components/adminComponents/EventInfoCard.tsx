import { Link } from "react-router-dom"
import moment from "moment"
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

import { EventHandler, MouseEventHandler } from "react"

interface EventCardProps {
    data:{
        title:string,
        desc:string,
        venue:string,
        seats:string,
        startDate:[],
        endDate:[],
        img:string
        _id:string,
    }
    onClick:MouseEventHandler<SVGElement>
}

const EventInfoCard = ({data,onClick}:EventCardProps) => {
    
    

  return (
    <>
    
    <div className='grid lg:grid-cols-2 border-2 mt-6 px-4 bg-stone-400 text-black rounded-md max-sm:min-h-72'>

        <div className='flex flex-col lg:border-r-2 justify-center'>
            <div className='lg:text-2xl text-xl underline flex'>
                <div className="max-sm:w-[15rem]">{data.title.length>18 ? data.title.slice(0,18)+"...":data.title}</div>
                <div className="md:hidden flex justify-around w-1/4 pt-1 text-2xl">
                    <Link to={`/admin/dashboard/edit-event/${data._id}`}><MdEdit className="text-orange-800"/></Link>
                    <MdDelete className="text-red-600" onClick={onClick}/>
                </div>
                
            </div>
            <div className='flex gap-2'>
                <div className='flex flex-col'>
                <label htmlFor="Start">Start:</label>
                <label htmlFor="Start">End:</label>
                <label htmlFor="Start">Venue:</label>
                <label htmlFor="Start">Spaces left:</label>
                </div>
                <div className='font-semibold'>
                    <h1>{moment(data.startDate).format("MMM Do YY")}</h1>
                    <h1>{moment(data.endDate).format("MMM Do YY")}</h1>
                    <h1>{data.venue}</h1>
                    <h1>{data.seats}</h1>
                </div>
            </div>
        </div>
        
        <div className='flex gap-4 w-full'>
            <div className='w-32 max-h-24 p-1 rounded-sm'>
                <img className="object-cover w-full h-full" src={data.img || ""} alt="" />
            </div>
            <div className='flex flex-col gap-2 w-1/2'>
                <div className='lg:text-4xl font-bold text-xl'>{data.title}</div>
                <div className='lg:text-xl hidden lg:block'>{data.desc.length > 50 ? data.desc.slice(0,30)+"...":data.desc}</div>
                <div className='lg:text-xl lg:hidden'>{data.desc.length > 50 ? data.desc.slice(0,30)+"...":data.desc}</div>
            </div>
            <div className="max-sm:hidden flex justify-end max-w-1/4 gap-6 items-center">
                <Link to={`/admin/dashboard/edit-event/${data._id}`}><MdEdit className="text-orange-800 text-3xl"/></Link>
                <MdDelete className="text-red-600 text-3xl cursor-pointer" onClick={onClick}/>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default EventInfoCard