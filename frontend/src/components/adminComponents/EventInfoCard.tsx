import { Link } from "react-router-dom"
import moment from "moment"

interface EventCardProps {
    data:{
        title:string,
        desc:string,
        venue:string,
        seats:string,
        startDate:[],
        endDate:[],
        img:string
        _id:string
    }
}

const EventInfoCard = ({data}:EventCardProps) => {
    
  return (
    <>
    
    <div className='grid lg:grid-cols-2 border-2 mt-6 px-4 bg-stone-400 text-black rounded-md'>

        <div className='flex flex-col lg:border-r-2 justify-center'>
            <div className='text-2xl underline'>
                {data.title}
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
        
        <div className='flex gap-4'>
            <div className='w-44 max-h-32 p-1 rounded-sm'>
                <img className="object-cover w-full h-full" src={data.img || ""} alt="" />
            </div>
            <div className='flex flex-col gap-2'>
                <div className='lg:text-4xl font-bold text-xl'>{data.title}</div>
                <div className='lg:text-xl hidden lg:block'>{data.desc.length > 50 ? data.desc.slice(0,30)+"...":data.desc}</div>
                <div className='lg:text-xl lg:hidden'>{data.desc.length > 50 ? data.desc.slice(0,30)+"...":data.desc}</div>
            </div>
            <div className="flex justify-end w-1/4 gap-6 items-center">
                <Link to={`/admin/dashboard/edit-event/${data._id}`}><button className="bg-orange-300 h-fit py-2 text-xl font-bold px-6 rounded-lg">Edit</button></Link>
                <button className="bg-red-500 h-fit py-2 text-xl font-bold px-6 rounded-lg">Delete</button>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default EventInfoCard