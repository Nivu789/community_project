import { useEffect, useRef, useState } from "react"
import axios from "axios";
import { BASE_URL } from "../config/config";



export const useListFilesInGallery = (refetch:boolean,prefix:string,userType="admin") =>{
    const [list,setList] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        try {
            setLoading(true)
            axios.post(`${BASE_URL}/admin/gallery-folders`,{prefix:prefix,userType},{
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