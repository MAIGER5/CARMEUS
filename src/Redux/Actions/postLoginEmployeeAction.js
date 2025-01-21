import axios from "axios";
import { decodeJWT } from "../../components/hooks/decodeJWT";

export const POST_LOGIN_EMPLOYEE_REQUEST = 'POST_LOGIN_EMPLOYEE_REQUEST';
export const POST_LOGIN_EMPLOYEE_SUCCESS = 'POST_LOGIN_EMPLOYEE_SUCCESS';
export const POST_LOGIN_EMPLOYEE_FAILURE = 'POST_LOGIN_EMPLOYEE_FAILURE';


// const URL = 'https://proy-canada-backend.onrender.com';
const URL = 'http://localhost:3000';


export const postLoginEmployeeAction = (payload)=>{
  return async (dispatch, getState)=>{
    dispatch({type:POST_LOGIN_EMPLOYEE_REQUEST})
    try {
      const response = await axios.post(`${URL}/login/Employee`,payload);
      if (response?.data?.token) {

        const token = response.data.token;
        const decodeToken = decodeJWT(token);
        const name = decodeToken.name;
        const mail = decodeToken.mail;

        const currenToken = getState().loginEmployee.tokenEmployee;
        if (currenToken !== response.data.token ) {
          localStorage.setItem('tokenEmployee', token,)
          localStorage.setItem('name', name)
          localStorage.setItem('emailEmployee', mail)
          dispatch({
            type:POST_LOGIN_EMPLOYEE_SUCCESS, 
            payload: token,
            name: name,
            email: mail,
          })

        }
      }
    } catch (error) {
      console.log({mensaje:error.response.data});

      // Comprueba si el error tiene una respuesta del servidor y extrae los detalles de los errores de validación
      const errorMessage = error.response && error.response.data && error.response.data.errors 
        ? error.response.data.errors 
        : [{ message: error.response.data.error }]; // Mensaje general si no es de validación
      dispatch({ type: POST_LOGIN_EMPLOYEE_FAILURE, error: errorMessage });
    }
  };
};