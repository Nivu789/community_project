import React from 'react'
import axios from 'axios'
import { BASE_URL } from '../config/config'

const JoinUs = () => {
    const handleTestMessage = () =>{
        axios.post(`${BASE_URL}/user/get-message`)
        .then((res)=>{
            console.log(res)
        })
    }

  return (
    <>
        <div className='text-3xl'>JoinUs</div>
        <button onClick={handleTestMessage}>Test message</button>
    </>
  )
}

export default JoinUs