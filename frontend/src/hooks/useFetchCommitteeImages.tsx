import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "../config/config"

export const useFetchCommitteeImages = (prefix:string,refetch:boolean) =>{
    const [images,setImages] = useState([])
    useEffect(()=>{
        axios.post(`${BASE_URL}/user/fetch-committee-images`,{prefix})  
        .then((response)=>{
            console.log(response.data.folders)
            if(response.data.folders){
            setImages(response.data.folders)
            }
    })  
    },[refetch])

    return {images}
}