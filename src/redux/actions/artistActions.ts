import { SET_ARTISTS, LOADING_ARTISTS} from "../types";
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