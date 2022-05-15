import { ADD_ADDRESS, SET_ADDRESSES, LOADING_ADDRESS, DELETE_ADDRESS, SET_DEFAULT_ADDRESS } from '../types'


const initialState = {
    userAddress: <any>[],
    loading: false
}

export default function (state = initialState, action:any) {
    switch (action.type) {
        case ADD_ADDRESS:
            return {
                ...state,
                userAddress: [...state.userAddress, action.payload]
            };
        case SET_ADDRESSES:
            return {
                ...state,
                userAddress: action.payload
            };
        case DELETE_ADDRESS:
            return {
                ...state,
            };
    

        case LOADING_ADDRESS:
            return {
                ...state,
                loading: true
        };

    default:
        return state;
    }
}
   