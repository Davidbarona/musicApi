import { GET_SEARCH_TRACKS, GET_SEARCH_ALBUMS, GET_SEARCH_ARTISTS } from "../actions/getSearchData";

const initialState = {
    tracks: [],
    artists: [],
    albums: []
}

export const searchReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_SEARCH_TRACKS:
            return {
                ...state,
                tracks: action.payload
            }
        case GET_SEARCH_ARTISTS:
            return {
                ...state,
                artists: action.payload
            }
        case GET_SEARCH_ALBUMS:
            return {
                ...state,
                albums: action.payload
            }
        default:
            return state
    }

}
