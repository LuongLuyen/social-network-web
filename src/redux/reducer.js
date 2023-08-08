
const initState = {
    user: [],
    post: []
}

const rootReducer = (state = initState, action) => {
    switch(action.type) {

        case 'USER':
            return {
                ...state,
                user: action.payload
            }
        case 'POST':

            return {
                ...state,
                post:action.payload
            }

        default:
            return state
    }
}
export default rootReducer