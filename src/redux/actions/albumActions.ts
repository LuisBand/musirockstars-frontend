import { SET_ALBUMS, LOADING_ALBUMS, SET_ERRORS, CLEAR_ERRORS, SET_CURRENT_ALBUM } from "../types";
import axios from 'axios';

export const setAlbums = () => async (dispatch: any) => {
    dispatch({ type: LOADING_ALBUMS });
    await axios.get('/album')
    .then((res) => {
        dispatch({
            type: SET_ALBUMS,
            payload: res.data
        });
        dispatch({type: CLEAR_ERRORS,});
    })
    .catch((err) => {
        console.log(err);
        dispatch({type: SET_ERRORS , payload: err.response})
    });
}

export const setCurrentAlbum = (albumId: any) => async (dispatch: any) => {
    console.log('holis');
    dispatch({ type: LOADING_ALBUMS });
    await axios.get(`/album/${albumId}`)
    .then((res) => {
        dispatch({
            type: SET_CURRENT_ALBUM,
            payload: res.data
        });
        dispatch({type: CLEAR_ERRORS,});
    })
    .catch((err) => {
        console.log(err);
        dispatch({type: SET_ERRORS , payload: err.response})
    });
}