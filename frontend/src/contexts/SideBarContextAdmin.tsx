import { createContext, SetStateAction, useState ,Dispatch, useContext} from "react";

interface SideBarContextType {
    openSideBar: boolean;
    setOpenSideBar: Dispatch<SetStateAction<boolean>>;
  }

const sideBarContextAdmin = createContext< SideBarContextType | null >(null)

export const useSideBarContext = () =>{
    const context = useContext(sideBarContextAdmin)
    if(!context){
        throw new Error("no value in context")
    }
    const {openSideBar,setOpenSideBar} = context
    return {openSideBar,setOpenSideBar}
}

export default function SideBarContextAdminProvider({children}:{children:React.ReactNode}){
    const [openSideBar,setOpenSideBar] = useState(false)
    return (
        <sideBarContextAdmin.Provider value={{openSideBar,setOpenSideBar}}>
            {children}
        </sideBarContextAdmin.Provider>
    )
}