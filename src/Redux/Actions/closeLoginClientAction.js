import { Try } from '@mui/icons-material';
import axios from 'axios';


export const CLOSE_LOGIN_CLIENT_REQUEST = 'CLOSE_LOGIN_CLIENT_REQUEST';
export const CLOSE_LOGIN_CLIENT_SUCCESS = 'CLOSE_LOGIN_CLIENT_SUCCESS';
export const CLOSE_LOGIN_CLIENT_FAILURE = 'CLOSE_LOGIN_CLIENT_FAILURE';


export const closeLoginClientAction = ()=>{
  return (dispatch) =>{
    dispatch({type:CLOSE_LOGIN_CLIENT_REQUEST});
    try {
      dispatch({type:CLOSE_LOGIN_CLIENT_SUCCESS})
      localStorage.removeItem('tokenClient')
      localStorage.removeItem('company')
      localStorage.removeItem('emailClient')
    } catch (error) {
      dispatch({type:CLOSE_LOGIN_CLIENT_FAILURE})
    }
  }
}