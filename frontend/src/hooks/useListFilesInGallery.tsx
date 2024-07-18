import { useEffect, useState } from "react"
import axios from "axios";
import { BASE_URL } from "../config/config";



export const useListFilesInGallery = (refetch:boolean,prefix:string) =>{
    const [list,setList] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        try {
            axios.post(`${BASE_URL}/admin/gallery-folders`,{prefix:prefix},{
                headers:{
                    Authorization:localStorage.getItem("adminToken"),
                }
            })
            .then((response)=>{
                if(response.data.folders){
                    setList(response.data.folders)
                }
            })
        
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    },[refetch])
    

    return {list,loading} 
}