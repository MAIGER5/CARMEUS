import axios from "axios";

export const POST_CLIENT_REQUEST = 'POST_CLIENT_REQUEST';
export const POST_CLIENT_SUCCESS = 'POST_CLIENT_SUCCESS';
export const POST_CLIENT_FAILURE = 'POST_CLIENT_FAILURE';
export const POST_CLIENT_CLEANE = 'POST_CLIENT_CLEAN';

const URL = 'http://localhost:3000/client';

export const postClientAction = (payload)=>{
  return async (dispatch)=>{
    dispatch({type:POST_CLIENT_REQUEST})
    try {
      const response = await axios.post(`${URL}/`, payload)
      dispatch({type:POST_CLIENT_SUCCESS, payload: response.data})
    } catch (error) {
            // Comprueba si el error tiene una respuesta del servidor y extrae los detalles de los errores de validación
        const errorMessage = error.response && error.response.data && error.response.data.errors 
          ? error.response.data.errors 
          : [{ message: error.message }]; // Mensaje general si no es de validación

        dispatch({ type: POST_CLIENT_FAILURE, error: errorMessage });
    }
  };
};

export const  cleanClient = ()=>{
  return (dispatch)=>{
    dispatch({type:POST_CLIENT_CLEANE})
  }
}