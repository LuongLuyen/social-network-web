import { configureStore } from '@reduxjs/toolkit'
import adminSlice from './Slice/adminSlice'

const store = configureStore({
    reducer: {
        admin: adminSlice.reducer
    },
})

export default store