import { SET_ADDRESSES, ADD_ADDRESS, SET_DEFAULT_ADDRESS, DELETE_ADDRESS, LOADING_ADDRESS, SET_ERRORS, CLEAR_ERRORS } from '../types'
import axios from 'axios';
import { useSelector } from 'react-redux';



export const addAddress= (addressData: any) => async (dispatch: any) => {
    dispatch({ type: LOADING_ADDRESS });
    await axios.post('/address', addressData)
    .then((res) => {
        dispatch({
            type: ADD_ADDRESS,
            payload: res.data
        });
        dispatch({type: CLEAR_ERRORS,});
    })
    .catch((err) => {
        console.log(err);
        dispatch({type: SET_ERRORS , payload: err.response})
    });
}

export const setAddresses= (userId: any) => async (dispatch: any) => {
    dispatch({ type: LOADING_ADDRESS });
    await axios.get(`/address/user/${userId}`)
    .then((res) => {
        dispatch({
            type: SET_ADDRESSES,
            payload: res.data
        });
        dispatch({type: CLEAR_ERRORS,});
    })
    .catch((err) => {
        console.log(err);
        dispatch({type: SET_ERRORS , payload: err.response})
    });
}

export const deleteAddress= (addressId: any, userId:any) => async (dispatch: any) => {
    dispatch({ type: LOADING_ADDRESS });
    await axios.delete(`/address/${addressId}`)
    .then((res) => {
        setAddresses(userId)
        dispatch({
            type: DELETE_ADDRESS,
            payload: res.data
        });
        dispatch({type: CLEAR_ERRORS,});
        
    })
    .catch((err) => {
        console.log(err);
        dispatch({type: SET_ERRORS , payload: err.response})
    });
}


