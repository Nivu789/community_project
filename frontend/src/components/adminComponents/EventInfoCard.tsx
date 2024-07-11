
import moment from "moment"

interface EventCardProps {
    data:{
        title:string,
        desc:string,
        venue:string,
        seats:string,
        startDate:[],
        endDate:[]

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
            <div className='w-44 h-full'>
                <img className="bg-cover bg-center" src="" alt="" />
            </div>
            <div className='flex flex-col gap-2'>
                <div className='lg:text-4xl font-bold text-xl'>{data.title}</div>
                <div className='lg:text-xl hidden lg:block'>{data.desc.length > 50 ? data.desc.slice(0,30)+"...":data.desc}</div>
                <div className='lg:text-xl lg:hidden'>{data.desc.length > 50 ? data.desc.slice(0,30)+"...":data.desc}</div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default EventInfoCard