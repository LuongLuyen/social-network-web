import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export default createSlice({
    name: "INTRODUCE",
    initialState: [
        {
            loginRegister: {
                register: true, 
                login: false
            }
        }, 
        []
    ],
    reducers: {
        statusLogin: (state, action) => {
            state[0].loginRegister.register = action.payload.register
            state[0].loginRegister.login = action.payload.login
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createUser.fulfilled, (state, action) => {
                state[1].push(action.payload)
            })
    },
})

export const createUser = createAsyncThunk(
    'createUser',
    async(newUser)=>{
        try {
            const res = await axios.post(`${process.env.REACT_APP_DOMAIN_SERVER}/user-api/user`, newUser)
            return res.data
        } catch (err) {
            return err
        }
    }
)

