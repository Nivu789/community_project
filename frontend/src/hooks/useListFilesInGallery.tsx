import { useEffect, useRef, useState } from "react"
import axios from "axios";
import { BASE_URL } from "../config/config";



export const useListFilesInGallery = (refetch: boolean, prefix: string, userType = "admin", inFolder?: boolean) => {
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        try {
            setLoading(true)
            if (inFolder) {
                axios.post(`${BASE_URL}/admin/gallery-folders`, { prefix: prefix, userType }, {
                    headers: {
                        Authorization: localStorage.getItem("adminToken"),
                    }
                })
                    .then((response) => {
                        if (response.data.folders) {
                            console.log(response)
                            console.log("hereeeeee")
                            setList(response.data.folders)
                        }
                    })
            } else {
                axios.get(`${BASE_URL}/admin/get-gallery-folders`)
                    .then((response) => {
                        setList(response.data.folderNames)
                    })
            }


        } catch (error) {
            console.log(error)
        } finally {
            console.log("CAAAAAAAAAAAA")
            setLoading(false)
        }
    }, [refetch])


    return { list, loading }
}