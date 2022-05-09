import * as loginActions  from "../actions/auth/types"

interface _user {
    id: number;
    username: string;
    email: string;
    token: string;
}

interface Login {
    type: string,
    payload: _user
}


const initialState = {
    id: 0,
    username: '',
    email: '',
    token: ''
}

const auth = (state: _user = initialState, action:Login) => {
    switch(action.type) {
        case loginActions.LOGIN:{
            console.log(state);
            return {
                id: action.payload.id,
                email: action.payload.email,
                username: action.payload.username,
                token: action.payload.token
            }
        }
        default: return state;
    }
}

export default auth;