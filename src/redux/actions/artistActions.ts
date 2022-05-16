import { SET_ARTISTS, LOADING_ARTISTS, SET_CURRENT_ARTIST, CLEAR_ERRORS, SET_ERRORS} from "../types";
import axios from 'axios';

export const setArtists = () => async (dispatch: any) => {
    dispatch({ type: LOADING_ARTISTS });
    await axios.get('/artist')
    .then((res) => {
        dispatch({
            type: SET_ARTISTS,
            payload: res.data
        });
    })
    .catch((err) => {
        console.log(err);
    });
}

export const setCurrentArtist = (artistId: any) => async (dispatch: any) => {
    dispatch({ type: LOADING_ARTISTS });
    await axios.get(`/artist/${artistId}`)
    .then((res) => {
        const artistData = res.data;
        axios.get(`/album/artist/${artistId}`)
        .then((resp)=>{
            const data = {
                artist: artistData,
                albums: resp.data
            }
            dispatch({
                type: SET_CURRENT_ARTIST,
                payload: data
            });
            dispatch({type: CLEAR_ERRORS,});
        })
        .catch((err)=>{
            console.log(err);
            dispatch({type: SET_ERRORS , payload: err.response})
        })
    })
    .catch((err) => {
        console.log(err);
        dispatch({type: SET_ERRORS , payload: err.response})
    });
}