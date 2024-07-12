import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    src:""
}

export const imageSlice = createSlice({
    name:'imageSlice',
    initialState,
    reducers:{
        setImage: (state,action)=>{
            state.src = action.payload
        }
    }
})

export const {setImage} = imageSlice.actions

export default imageSlice.reducer