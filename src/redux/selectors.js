export const fetchPostSelector = (state) => state.home.data

export const fetchFilmSelector = (state) => state.film.data

export const statusLoginSelector = (state) => state.introduce[0]
export const createUserSelector = (state) => state.introduce[1]

export const fetchDataSelector = (state) => state.admin.data

export const userChatSelector = (state) => state.chat.dataUser

export const messSelector = (state) => state.chat.dataMess[0]