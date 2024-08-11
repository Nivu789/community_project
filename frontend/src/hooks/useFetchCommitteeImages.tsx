import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "../config/config"

export const useFetchCommitteeImages = (prefix:string,refetch:boolean,committeeName?:string) =>{
    const [images,setImages] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        axios.post(`${BASE_URL}/user/fetch-committee-images`,{prefix})  
        .then((response)=>{
            console.log(response.data.folders)
            if(response.data.folders){
            setImages(response.data.folders)
            setLoading(false)
            }
    })  
    },[refetch,committeeName])

    return {images,loading}
}