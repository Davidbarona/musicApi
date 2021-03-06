import { GET_GENRES} from "../actions/getGenres";

const initialState = {
    genres: []
}

export const genresReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_GENRES:
            return {
                ...state,
                genres: action.payload
            }
        default:
            return state
    }

}
