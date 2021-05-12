import axios from 'axios'
const token = process.env.REACT_APP_TOKEN;
export const GET_GENRES = 'GET_GENRES';


export const getGenres = () => {

    return async (dispatch) => {
        await axios.get('https://api.spotify.com/v1/browse/categories?limit=50', {
            headers: {
                Authorization: token
            }
        }).then((r) =>
            dispatch(saveGenres(r))
        )
    }
}

const saveGenres= (params) => {
    return {
        type: GET_GENRES,
        payload: params
    }
}