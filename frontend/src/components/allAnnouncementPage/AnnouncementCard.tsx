import { MdOutlineReadMore } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa6";
import moment from "moment";

type AnnouncementCardProps = {
    data:{
        title:string,
        description:string
        file:File
        published:Date
    }
}

const AnnouncementCard = ({data}:AnnouncementCardProps) => {
  return (
    <div className='grid grid-cols-3 bg-blue-400 p-4 rounded-xl shadow-lg'>
            <div className='col-span-2 flex flex-col gap-2 px-6 border-r-2'>
                <div className='text-xl font-bold'>
                    {data.title}
                </div>
                <div>
                    {data.description}
                </div>
            </div>

            <div className='flex justify-between items-center'>
                <div className='border-r-2 px-12 flex text-center items-center'>{data.file ? <a href={data.file.toString()} className="flex gap-2 items-center">Download<FaFilePdf className="text-red-800"/></a>
                :<div className='text-center flex items-center gap-2'>Read more<MdOutlineReadMore className='text-2xl'/>
                </div>}
                
                </div>
                <div className="text-center px-10"><span className="font-bold">Published</span> : {moment(data.published).format('MMM DD yyyy')}</div>
            </div>
        </div>
  )
}

export default AnnouncementCard