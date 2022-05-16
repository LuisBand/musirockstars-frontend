import { SET_CURRENT_SONG} from "../types";

export const setCurrentSong= (data:any) => async (dispatch: any) => {
    dispatch({
        type: SET_CURRENT_SONG,
        payload: data
    });
}