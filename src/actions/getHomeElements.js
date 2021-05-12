import axios from 'axios'
export const GET_HOME_DATA = 'GET_HOME_DATA';
export const GET_HOME_GENRES = 'GET_HOME_GENRES';
export const GET_HOME_PLAYLISTS = 'GET_HOME_PLAYLISTS';
const token = process.env.REACT_APP_TOKEN;


export const getHomeData = () => {

    return async (dispatch) => {
        await axios.get('https://api.spotify.com/v1/browse/new-releases?offset=0&limit=15', {
            headers: {
                Authorization: token
            }
        }).then((r) =>
            dispatch(saveHomeData(r))
        )
    }
}

export const getHomeGenres = () => {

    return async (dispatch) => {
        await axios.get('https://api.spotify.com/v1/browse/categories?limit=15  ', {
            headers: {
                Authorization: token
            }
        }).then((r) =>
            dispatch(saveHomeGenres(r))
        )
    }
}

export const getHomePlaylists = () => {

    return async (dispatch) => {
        await axios.get('https://api.spotify.com/v1/browse/featured-playlists?limit=15', {
            headers: {
                Authorization: token
            }
        }).then((r) =>
            dispatch(saveHomePlaylists(r))
        )
    }
}

const saveHomeData = (params) => {
    return {
        type: GET_HOME_DATA,
        payload: params
    }
}

const saveHomeGenres= (params) => {
    return {
        type: GET_HOME_GENRES,
        payload: params
    }
}

const saveHomePlaylists= (params) => {
    return {
        type: GET_HOME_PLAYLISTS,
        payload: params
    }
}