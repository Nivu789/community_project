import {configureStore} from '@reduxjs/toolkit'
import imageReducer from './imageSlice'
import fileSlice from './fileSlice'

export const store = configureStore({
    reducer:{
        image:imageReducer,
        file:fileSlice
    }
})

export type RootState = ReturnType<typeof store.getState>