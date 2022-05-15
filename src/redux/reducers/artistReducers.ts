import {SET_ARTISTS, LOADING_ARTISTS} from '../types'

const initialState = {
    loading: false,
}

export default function (state = initialState, action:any) {
    switch (action.type) {
        case SET_ARTISTS:
            return {           
                artists: action.payload,     
                loading: false,
            };

        case LOADING_ARTISTS:
            return {
                ...state,
                loading: true
        };

    default:
        return state;
    }
}