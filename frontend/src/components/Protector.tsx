import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../config/config'
import { Navigate } from 'react-router-dom'

const Protector = ({children}:{children:React.ReactNode}) => {
    
    const [authenticated,setAuthenticated] = useState<Boolean| null>(null)
    
    useEffect(()=>{
        const checkAuth = () =>{
            console.log("esfsf")
            axios.get(`${BASE_URL}/user/auth`,{
                headers:{
                    Authorization:localStorage.getItem("adminToken")
                }
            }).then((response)=>{
                if(response.data.error){
                    setAuthenticated(false)
                }else{
                    setAuthenticated(true)
                }
            })

        }

        checkAuth()
        
    },[])

  if(authenticated==null){
    return <div>Loading....</div>
  }

  if(authenticated){
    return <div>{children}</div> 
  }

  return <Navigate to='/admin/signin'/>
}

export default Protector