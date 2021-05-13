import { GET_HOME_DATA, GET_HOME_GENRES, GET_HOME_PLAYLISTS} from "../actions/getHomeElements";

const initialState = {
    data: [],
    genres: [],
    playlists: [],
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
        case GET_HOME_PLAYLISTS:
            return {
                ...state,
                playlists: action.payload
            }
        default:
            return state
    }

}
