import {SET_ALBUMS, LOADING_ALBUMS, SET_CURRENT_ALBUM} from '../types'

const initialState = {
    loading: false,
}

export default function (state = initialState, action:any) {
    switch (action.type) {
        case SET_ALBUMS:
            return {   
                ...state,        
                albums: action.payload,     
                loading: false,
            };

        case SET_CURRENT_ALBUM:
            return {      
                ...state,     
                currentAlbum: action.payload,     
                loading: false,
            };

        case LOADING_ALBUMS:
            return {
                ...state,
                loading: true
        };

    default:
        return state;
    }
}