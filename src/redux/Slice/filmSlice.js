import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export default createSlice({
    name: "FILM",
    initialState: { status: 'idle', data: [] },
    reducers: {
        addFilm: (state, action) => {
            state.data.push(action.payload)
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilm.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchFilm.fulfilled, (state, action) => {
                state.data = action.payload.filter((item)=>{
                    return item.content !== null
                })
                state.status = 'idle'
            })
    },
})

export const fetchFilm = createAsyncThunk('fetchFilm', async () => {
    const res = await fetch('http://localhost:5000/film-api/film')
    const data = await res.json()
    return data
})
