import axios from "axios"
import { BASE_URL } from "../config/config"
import { useEffect, useState,useCallback } from "react"


type EventInfoProps = {
    id:string | undefined
}

type EventInfo = {
    title:string
}

export const useFetchEventInfo = ({id}:EventInfoProps) =>{
    const [eventInfo,setEventInfo] = useState<EventInfo | []>()
    
    const fetchEventInfo = useCallback(() => {
        console.log("called")
        if (id) {
          axios
            .get(`${BASE_URL}/admin/get-event-info/${id}`, {
              headers: {
                Authorization: localStorage.getItem("adminToken"),
              },
            })
            .then((response) => {
              if (!response.data.error) {
                setEventInfo(response.data.eventInfo);
              }
            });
        }
      }, [id]);
    
      useEffect(() => {
        fetchEventInfo();
      }, [fetchEventInfo]);
    
      return { eventInfo };

}