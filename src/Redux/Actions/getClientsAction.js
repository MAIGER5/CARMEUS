import axios from "axios";

export const GET_CLIENTS_REQUEST = 'GET_CLIENTS_REQUEST';
export const GET_CLIENTS_SUCCESS = 'GET_CLIENTS_SUCCESS';
export const GET_CLIENTS_FAILURE = 'GET_CLIENTS_FAILURE';

const URL = 'http://localhost:3000/client'

export const getClientsAction = ()=>{
  return async (dispatch) =>{
    dispatch({type:GET_CLIENTS_REQUEST});
    try {
      const response = await axios.get(`${URL}/`);
      dispatch({
        type:GET_CLIENTS_SUCCESS, 
        payload:response.data
      })
    } catch (error) {
      dispatch({
        type:GET_CLIENTS_FAILURE, 
        error:error.message || 'Error al obtener clientes' })
    }
  }
}