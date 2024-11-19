import axios from "axios";

export const POST_LOGIN_CLIENT_REQUEST = 'POST_LOGIN_CLIENT_REQUEST';
export const POST_LOGIN_CLIENT_SUCCESS = 'POST_LOGIN_CLIENT_SUCCESS';
export const POST_LOGIN_CLIENT_FAILURE = 'POST_LOGIN_CLIENT_FAILURE';


const URL = 'http://localhost:3000/login/client';


export const postLoginClientrAction = (payload)=>{
  return async (dispatch, getState)=>{
    dispatch({type:POST_LOGIN_CLIENT_REQUEST})
    try {
      const response = await axios.post(`${URL}`,payload);
      if (response.data && response.data.token) {
        const currenToken = getState().login.tokenClient;
        if (currenToken !== response.data.token ) {
          localStorage.setItem('token', response.data.token,)
          localStorage.setItem('company', response.data.company)
          localStorage.setItem('email', response.data.email)
          dispatch({
            type:POST_LOGIN_CLIENT_SUCCESS, 
            payload: response.data.token,
            company: response.data.company,
            email: response.data.email,
          })
          console.log({
            token: response.data.token, 
            company: response.data.company,
            email: response.data.email
          })
        }
      }
    } catch (error) {
      // Comprueba si el error tiene una respuesta del servidor y extrae los detalles de los errores de validación
      const errorMessage = error.response && error.response.data && error.response.data.errors 
        ? error.response.data.errors 
        : [{ message: error.message }]; // Mensaje general si no es de validación
      dispatch({ type: POST_LOGIN_CLIENT_FAILURE, error: errorMessage });
    }
  };
};