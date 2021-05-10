import axios from 'axios'
export const GET_SEARCH_TRACKS = 'GET_SEARCH_TRACKS';
export const GET_SEARCH_ARTISTS = 'GET_SEARCH_ARTISTS';
export const GET_SEARCH_ALBUMS = 'GET_SEARCH_ALBUMS';

const token = process.env.REACT_APP_TOKEN;

export const getSearchTracks = (params) => {

    return async (dispatch) => {
        await axios.get(`https://api.spotify.com/v1/search?q=${params}&type=track&offset=0&limit=5`, {
            headers: {
                Authorization: token
            }
        }).then((r) =>
            dispatch(saveSearchTracks(r))
        )
    }
}

export const getSearchAlbums = (params) => {

    return async (dispatch) => {
        await axios.get(`https://api.spotify.com/v1/search?q=${params}&type=album&offset=0&limit=15`, {
            headers: {
                Authorization: token
            }
        }).then((r) =>
            dispatch(saveSearchAlbums(r))
        )
    }
}

export const getSearchArtists = (params) => {

    return async (dispatch) => {
        await axios.get(`https://api.spotify.com/v1/search?q=${params}&type=artist&offset=0&limit=15`, {
            headers: {
                Authorization: token
            }
        }).then((r) =>
            dispatch(saveSearchArtists(r))
        )
    }
}



const saveSearchTracks = (params) => {
    return {
        type: GET_SEARCH_TRACKS,
        payload: params
    }
}

const saveSearchAlbums = (params) => {
    return {
        type: GET_SEARCH_ALBUMS,
        payload: params
    }
}

const saveSearchArtists = (params) => {
    return {
        type: GET_SEARCH_ARTISTS,
        payload: params
    }
}
