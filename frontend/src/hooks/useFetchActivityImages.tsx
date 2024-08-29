import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "../config/config"

export const useFetchActivityImages = (prefix:string,refetch?:boolean,activityName?:string) =>{
    console.log("hrere")
    const [images,setImages] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        axios.post(`${BASE_URL}/user/fetch-activity-images`,{prefix})  
        .then((response)=>{
            console.log(response)
            console.log(response.data.folders)
            if(response.data.folders){
            setImages(response.data.folders)
            setLoading(false)
            }
    })  
    },[refetch,activityName])

    return {images,loading}
}