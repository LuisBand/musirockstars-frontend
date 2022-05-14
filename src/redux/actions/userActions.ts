import { SET_USER, SET_UNAUTHENTICATED, LOADING_USER, SET_ERRORS, CLEAR_ERRORS } from '../types'
import axios from 'axios';

export const loginUser = (userData: any, history: any) => async (dispatch: any) => {
    dispatch({ type: LOADING_USER });
    await axios.post('/login', userData)
    .then((res) => {
        const token = `Bearer ${res.data.token}`;
        localStorage.setItem('token', `Bearer ${res.data.token}`);//setting token to local storage
        axios.defaults.headers.common['Authorization'] = token;//setting authorize token to header in axios
        dispatch({
            type: SET_USER,
            payload: res.data
        });
        dispatch({type: CLEAR_ERRORS,});
        console.log(history);
    })
    .catch((err) => {
        console.log(err);
        dispatch({type: SET_ERRORS , payload: err.response})
    });
}

export const logoutUser = () => (dispatch: any) => {
    console.log('logingOut');
    delete axios.defaults.headers.common['Authorization']
    dispatch({
        type: SET_UNAUTHENTICATED
    });
    window.location.href = '/login';
};


