import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export default createSlice({
    name: "ADMIN",
    initialState: { status: 'idle', data: [] },
    reducers: {
        addUser: (state, action) => {
            state.data.push(action.payload)
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = 'idle'
            })
    },
})

export const fetchUser = createAsyncThunk('fetchUser', async () => {
    const res = await fetch(`${process.env.REACT_APP_DOMAIN_SERVER}/admin-api/user/ADMIN`)
    const data = await res.json()
    return data
})
