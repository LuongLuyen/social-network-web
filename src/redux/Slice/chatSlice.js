import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export default createSlice({
    name: "CHAT",
    initialState: { status: 'idle', data: [] },
    reducers: {
        addUser: (state, action) => {
            state.data.push(action.payload)
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchChatUser.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchChatUser.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = 'idle'
            })
    },
})

export const fetchChatUser = createAsyncThunk('fetchChatUser', async () => {
    const res = await fetch('http://localhost:5000/user-api/user/info')
    const data = await res.json()
    return data
})
