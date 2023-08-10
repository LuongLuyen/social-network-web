import { configureStore } from '@reduxjs/toolkit'
import adminSlice from './Slice/adminSlice'
import introduceSlice from './Slice/introduceSlice'

const store = configureStore({
    reducer: {
        admin: adminSlice.reducer,
        introduce: introduceSlice.reducer
    },
})

export default store