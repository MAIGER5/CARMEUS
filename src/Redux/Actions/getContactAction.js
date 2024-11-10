import axios from "axios";

export const GET_CONTACTS_REQUEST = 'GET_CONTACTS_REQUEST';
export const GET_CONTACTS_SUCCESS = 'GET_CONTACTS_SUCCESS';
export const GET_CONTACTS_FAILURE = 'GET_CONTACTS_FAILURE';

const URL = 'http://localhost:3000/contact';

export const getContactsAction = () =>{
  return async (dispatch)=>{
    dispatch({type:GET_CONTACTS_REQUEST});
    try {
      const response = await axios.get(`${URL}/`);
      dispatch({
        type:GET_CONTACTS_SUCCESS, 
        payload: response.data
      })
    } catch (error) {
      dispatch({
        type:GET_CONTACTS_FAILURE, 
        error:error.message || 'Error al obtener clientes' 
      })
    }
  }
}