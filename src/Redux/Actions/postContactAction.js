import axios from 'axios';

export const POST_CONTACT_REQUEST = 'POST_CONTACT_REQUEST';
export const POST_CONTACT_SUCCESS = 'POST_CONTACT_SUCCESS';
export const POST_CONTACT_FAILURE = 'POST_CONTACT_FAILURE';

// const URL = 'https://proy-canada-backend.onrender.com';
const URL = 'http://localhost:3000';


export const postContactAction = (payload) => {
  return async (dispatch) =>{
    dispatch({type: POST_CONTACT_REQUEST})
    try {
      await axios.post(`${URL}/contact/`, payload);
      dispatch({ type: POST_CONTACT_SUCCESS });
    } catch (error) {
      dispatch({ type: POST_CONTACT_FAILURE, error: error.message });
    }

  }
}
