import { GET_HOME_DATA } from "../actions/getHomeElements";

const initialState = {
    data: []
}

export const homeReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_HOME_DATA:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }

}
