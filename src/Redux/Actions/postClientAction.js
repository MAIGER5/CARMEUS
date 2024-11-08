import axios from "axios";

export const POST_CLIENT_REQUEST = 'POST_CLIENT_REQUEST';
export const POST_CLIENT_SUCCESS = 'POST_CLIENT_SUCCESS';
export const POST_CLIENT_FAILURE = 'POST_CLIENT_FAILURE';

const URL = 'http://localhost:3000/client';

export const postClientAction = (payload)=>{
  return async (dispatch)=>{
    dispatch({type:POST_CLIENT_REQUEST})
    try {
      const response = await axios.post(`${URL}/`, payload)
      dispatch({type:POST_CLIENT_SUCCESS, payload: response.data})
    } catch (error) {
      dispatch({type:POST_CLIENT_FAILURE, error: error.message})
    }
  };
};