import { SET_ERRORS, CLEAR_ERRORS } from '../types'


const initialState = {
    loading: false,
    errors: null
}

export default function (state = initialState, action:any) {
    switch (action.type) {
        case SET_ERRORS:
            return {
                ...state,
                loading: false,
                errors: action.payload
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                loading: false,
                errors: null
            };

        default:
            return state;
        }
}
   