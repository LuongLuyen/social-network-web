import { createSlice} from '@reduxjs/toolkit'

export default createSlice({
    name: "INTRODUCE",
    initialState: [{register: true}, {login: false}],
    reducers: {
        statusLogin: (state, action) => {
            state.push(...action.payload) // state ko sử dụng được phép gán
            state.splice(0,2)
        },
    },
})

