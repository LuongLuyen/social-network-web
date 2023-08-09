import { createSlice } from '@reduxjs/toolkit'

export default createSlice({
    name: "ADMIN",
    initialState:[],
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
    }
})