import axios from 'axios';

// const URL = 'https://proy-canada-backend.onrender.com';
const URL = 'http://localhost:3000';

export const POST_EMPLOYEE_REQUEST = 'POST_EMPLOYEE_REQUEST';
export const POST_EMPLOYEE_SUCCESS = 'POST_EMPLOYEE_SUCCESS';
export const POST_EMPLOYEE_FAILURE = 'POST_EMPLOYEE_FAILURE';

export const postEmplyeeAction = (payload) =>{
  return async (dispatch) =>{
    dispatch({type:POST_EMPLOYEE_REQUEST})
    try {
      const response = await axios.post(`${URL}/employee/`, payload)
      dispatch({
        type:POST_EMPLOYEE_SUCCESS,
        payload:response.data
      })
      console.log(response.data)

    } catch (error) {
      const errorMessage = error.response && error.response.data && error.response.data.errors 
      ? error.response.data.errors 
      : [{ message: error.message }]; // Mensaje general si no es de validación
      dispatch({ 
        type: POST_EMPLOYEE_FAILURE, 
        error: errorMessage 
      });
    }
  }
}