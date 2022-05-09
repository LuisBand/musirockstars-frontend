import { TypedUseSelectorHook } from 'react-redux';
import * as types from './types'

interface _user {
    id: number;
    username: string;
    email: string;
    token: string;
}

export const login = (payload: _user) => {
    return {
        type: types.LOGIN,
        payload: payload
    }
}


