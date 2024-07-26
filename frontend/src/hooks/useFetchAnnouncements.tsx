import axios from "axios"
import { BASE_URL } from "../config/config"
import { useEffect, useState } from "react"

type Props = {
    userType:string,
    refetch?:boolean
    showAll?:boolean
}

type Announcement = {
    
    title:string,
    description:string,
    published:Date,
    lastDate:Date,
    file:File
    _id:string,
    showInHome:boolean
    
}

export const useFetchAnnouncements = ({userType,refetch,showAll}:Props)  =>{
    
    const [announcements,setAnnouncements] = useState<Announcement[]>([])
    useEffect(()=>{
        axios.get(`${BASE_URL}/${userType}/get-announcements`,{
            headers:{
                Authorization:localStorage.getItem("adminToken"),
                'X-Show-All': showAll?.toString()
            }
        }).then((response)=>{
            if(response.data.success){
                setAnnouncements(response.data.announcements)
            }
        })
        console.log("Refethced")
    },[refetch])
    return {announcements}
    
}