import axios from "axios";
import { decodeJWT } from "../../components/hooks/decodeJWT";


export const POST_LOGIN_CLIENT_REQUEST = 'POST_LOGIN_CLIENT_REQUEST';
export const POST_LOGIN_CLIENT_SUCCESS = 'POST_LOGIN_CLIENT_SUCCESS';
export const POST_LOGIN_CLIENT_FAILURE = 'POST_LOGIN_CLIENT_FAILURE';


// const URL = 'https://proy-canada-backend.onrender.com';
const URL = 'http://localhost:3000';


export const postLoginClientrAction = (payload)=>{
  return async (dispatch, getState)=>{
    dispatch({type:POST_LOGIN_CLIENT_REQUEST})
    try {
      const response = await axios.post(`${URL}/login/client`,payload);
      if (response?.data?.token) {
        const token = response.data.token;
        const decodeToken = decodeJWT(token);
        const company = decodeToken.company;
        const mail = decodeToken.mail;

        const currenToken = getState().login.tokenClient;
        if (currenToken !== token ) {
          localStorage.setItem('tokenClient', token,)
          localStorage.setItem('company', company)
          localStorage.setItem('emailClient', mail)
          dispatch({
            type:POST_LOGIN_CLIENT_SUCCESS, 
            payload: token,
            company: company,
            email: mail,
          })
        }
      }
    } catch (error) {
      console.log({mensaje:error.response.data});

      // Comprueba si el error tiene una respuesta del servidor y extrae los detalles de los errores de validación
      const errorMessage = error?.response?.data?.errors 
        ? error.response.data.errors 
        : [{ message: error.response.data.error }]; // Mensaje general si no es de validación
      dispatch({ type: POST_LOGIN_CLIENT_FAILURE, error: errorMessage });
    }
  };
};