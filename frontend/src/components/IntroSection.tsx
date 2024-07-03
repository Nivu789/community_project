import React from 'react'

const IntroSection = () => {
  return (
    <div className='grid grid-cols-2 h-[700px]'>
        <div className='bg-green-500'>
            <div className='grid grid-cols-2 h-full'>
                <div className='bg-slate-500 flex flex-col justify-between h-full py-28'>
                    <div className='bg-slate-600 h-1/2 text-3xl'>
                        A community that unites people
                    </div>
                    <div>
                    Welcoming International women since 1981
                    </div>
                </div>
                <div className='bg-slate-700 flex justify-center items-center'>
                    <div className='h-3/4 bg-black rounded-t-3xl'>
                        <img className="rounded-t-3xl" src="https://janmabhumi.in/wp-content/uploads/2021/12/rajendran-pullur.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-green-800 text-xl p-5 flex flex-col justify-around'>
            <div>
            The International Social Club is the perfect way for international women to make new friends and network professionally. We welcome new members all year round, and our club activities are a great way to meet people from all over the world. In addition to club activities, our members also have access to key resources that provide day-to-day information and support. These resources include a directory of local businesses and services, a calendar of events, and a forum where members can ask questions and share advice. Whether you're looking for new friends or professional connections, the International Social Club is the perfect place to start
            </div>
            <div className='flex justify-end'>
            <button className='bg-black text-white'>JOIN US</button>
            </div>
        </div>
    </div>
  )
}

export default IntroSection