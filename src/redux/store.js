import { configureStore } from '@reduxjs/toolkit'
import adminSlice from './Slice/adminSlice'
import introduceSlice from './Slice/introduceSlice'
import homeSlice from './Slice/homeSlice'
import filmSlice from './Slice/filmSlice'
import chatSlice from './Slice/chatSlice'

const store = configureStore({
    reducer: {
        introduce: introduceSlice.reducer,
        home: homeSlice.reducer,
        admin: adminSlice.reducer,
        film: filmSlice.reducer,
        chat: chatSlice.reducer
    },
})

export default store