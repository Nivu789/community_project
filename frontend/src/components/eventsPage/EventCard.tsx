import moment from "moment"

interface EventProps {
    data:{
        title:string,
        desc:string,
        img:string,
        seats:string,
        startDate:[],
        endDate:[],
        _id:string,
        venue:string
    }
    
}

const EventCard = ({data}:EventProps) => {
  return (
    <div className='grid lg:grid-cols-2 h-1/2 border-2 p-2 gap-4 mt-6 bg-orange-200 shadow-lg'>
        
        <div className='flex flex-col lg:border-r-2 justify-center lg:items-center gap-6'>
            <div className='text-2xl underline'>
                Special Event
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
            <div className='w-44 h-44 relative'>
                <img className="object-cover h-full w-full" src={data.img} alt="" />
            </div>
            <div className='flex flex-col gap-2'>
                <div className='lg:text-4xl font-bold text-2xl'>{data.title}</div>
                <div className='text-xl hidden lg:block'>{data.desc.length > 50 ? data.desc.slice(0,30)+"...":data.desc}</div>
                <div className='text-xl lg:hidden'>{data.desc.length > 50 ? data.desc.slice(0,30)+"...":data.desc}</div>
            </div>
        </div>
    </div>
  )
}

export default EventCard