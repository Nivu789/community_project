import { MdOutlineReadMore } from "react-icons/md";

const AnnouncementCard = () => {
  return (
    <div className='grid grid-cols-3 bg-blue-400 p-4 rounded-xl shadow-lg'>
            <div className='col-span-2 flex flex-col gap-2 px-6 border-r-2'>
                <div className='text-xl font-bold'>
                    Title
                </div>
                <div>
                    Description
                </div>
            </div>

            <div className='flex justify-between items-center'>
                <div className='border-r-2 px-12 flex text-center'>File</div>
                <div className='text-center px-12 flex items-center gap-2'>Read more<MdOutlineReadMore className='text-2xl'/>
                </div>
            </div>
        </div>
  )
}

export default AnnouncementCard