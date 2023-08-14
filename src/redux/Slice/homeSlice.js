import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export default createSlice({
    name: "HOME",
    initialState: { status: 'idle', data: [] },
    reducers: {
        addPost: (state, action) => {
            state.data.push(action.payload)
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPost.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchPost.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = 'idle'
            })
    },
})

export const fetchPost = createAsyncThunk('fetchPost', async () => {
    const res = await fetch('http://localhost:5000/user-api/post')
    const data = await res.json()
    return data
})
