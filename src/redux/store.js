import { configureStore } from '@reduxjs/toolkit'
import adminSlice from './Slice/adminSlice'
import introduceSlice from './Slice/introduceSlice'
import homeSlice from './Slice/homeSlice'

const store = configureStore({
    reducer: {
        introduce: introduceSlice.reducer,
        home: homeSlice.reducer,
        admin: adminSlice.reducer,
    },
})

export default store