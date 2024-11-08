import axios from 'axios';

export const POST_CONTACT_REQUEST = 'POST_CONTACT_REQUEST';
export const POST_CONTACT_SUCCESS = 'POST_CONTACT_SUCCESS';
export const POST_CONTACT_FAILURE = 'POST_CONTACT_FAILURE';

const URL = 'http://localhost:3000/contact';


export const postContactAction = (payload) => {
  console.log(payload)
  return async (dispatch) =>{

    dispatch({type: POST_CONTACT_REQUEST})

    try {
      // Realiza la solicitud POST sin almacenar la respuesta
      await axios.post(`${URL}/`, payload);

      // Solo envía el tipo de acción sin ningún payload adicional
      dispatch({ type: POST_CONTACT_SUCCESS });
    } catch (error) {
      dispatch({ type: POST_CONTACT_FAILURE, error: error.message });
    }

    // el codigo siguiente se usa para cuando deseamos guardar datos en el reducer
    // try {
    //   const response = await axios.post(`${URL}/`,payload)
    //   dispatch({type: POST_CONTACT_SUCCESS, payload: response.data})
    // } catch (error) {
    //   dispatch({type: POST_CONTACT_FAILURE, error: error.message})
    // }
  }
}
