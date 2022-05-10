import {SET_ALBUMS, LOADING_ALBUMS} from '../types'

// type _album = {
//     album: {
//         name: string,
//         image: string
//     }
// }

// interface _albums {
//     albums:_album
// }

const initialState = {
    loading: false,
}

export default function (state = initialState, action:any) {
    switch (action.type) {
        case SET_ALBUMS:
            return {           
                albums: action.payload,     
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