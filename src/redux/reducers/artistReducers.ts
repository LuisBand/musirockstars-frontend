import {SET_ARTISTS, LOADING_ARTISTS, SET_CURRENT_ARTIST} from '../types'

const initialState = {
    loading: false,
}

export default function (state = initialState, action:any) {
    switch (action.type) {
        case SET_ARTISTS:
            return {    
                ...state,       
                artists: action.payload,     
                loading: false,
            };

        case SET_CURRENT_ARTIST:
            return {           
                ...state,
                currentArtist: action.payload,
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