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
                state.data = action.payload.filter((item)=>{
                    return item.content !== null
                })
                state.status = 'idle'
            })
    },
})

export const fetchPost = createAsyncThunk('fetchPost', async () => {
    const res = await fetch(`${process.env.REACT_APP_DOMAIN_SERVER}/user-api/post`)
    const data = await res.json()
    return data
})
