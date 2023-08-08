export const fetchDataPost = (data) => {
    return {
        type: 'POST',
        payload: data
    }
}


export const fetchDataUser = (data) => {
    return {
        type: 'USER',
        payload: data
    }
}
