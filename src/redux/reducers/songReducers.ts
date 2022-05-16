import {SET_CURRENT_SONG} from '../types'

const initialState = {
    loading: false,
}

export const currentSongReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case SET_CURRENT_SONG:
            return {           
                ...action.payload,     
                loading: false,
            };

        default:
            return state;
        }
}

export default currentSongReducer;