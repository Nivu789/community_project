import { useEffect } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../store/store"

export const useFetchImageFromStore = () =>{
    const croppedImage = useSelector((state:RootState)=>state.image.src) || ""
    return {croppedImage}
}