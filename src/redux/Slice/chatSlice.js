import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export default createSlice({
    name: "CHAT",
    initialState: { status: 'idle', dataUser: [], dataMess: [] },
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
                state.dataUser = action.payload
                state.status = 'idle'
            })
            .addCase(fetchMessUser.fulfilled, (state, action) => {
                state.dataMess.push(action.payload)
                state.status = 'idle'
            })
    },
})

export const fetchChatUser = createAsyncThunk('fetchChatUser', async () => {
    const res = await fetch('http://localhost:5000/user-api/user/info')
    const data = await res.json()
    return data
})

export const fetchMessUser = createAsyncThunk(
    'fetchMessUser',
    async(id)=>{
        try {
            const res = await axios.post("http://localhost:5000/mess-api/mess", id)
            const data = res.data
            return data
        } catch (err) {
            return err
        }
    }
)

