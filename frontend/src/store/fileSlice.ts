import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    file:""
}

const fileSlice = createSlice({
    name:"fileSlice",
    initialState,
    reducers:{
        addFile : (state,action)=>{
            state.file = action.payload
        },
        removeFile: (state,action)=>{
            state.file = ""
        }
    }
})

export default fileSlice.reducer
export const {addFile,removeFile} = fileSlice.actions