import axios from 'axios'
export const GET_HOME_DATA = 'GET_HOME_DATA';
const token = process.env.REACT_APP_TOKEN;


export const getHomeData = () => {

    return async (dispatch) => {
        console.log("token",token)
        await axios.get('https://api.spotify.com/v1/browse/new-releases?offset=0&limit=7 ', {
            headers: {
                Authorization: token
            }
        }).then((r) =>
            dispatch(saveHomeData(r))
        )
    }
}

const saveHomeData = (params) => {
    return {
        type: GET_HOME_DATA,
        payload: params
    }
}
