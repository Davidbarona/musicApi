import { GET_HOME_DATA, GET_HOME_GENRES } from "../actions/getHomeElements";

const initialState = {
    data: [],
    genres: []
}

export const homeReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_HOME_DATA:
            return {
                ...state,
                data: action.payload
            }
        case GET_HOME_GENRES:
            return {
                ...state,
                genres: action.payload
            }
        default:
            return state
    }

}
