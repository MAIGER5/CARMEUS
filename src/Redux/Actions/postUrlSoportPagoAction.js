import axios from "axios";

export const POST_URL_SOPORTEPAGO_REQUEST = "POST_URL_SOPORTEPAGO_REQUEST";
export const POST_URL_SOPORTEPAGO_SUCCESS = "POST_URL_SOPORTEPAGO_SUCCESS";
export const POST_URL_SOPORTEPAGO_FAILURE = "POST_URL_SOPORTEPAGO_FAILURE";

const URL = "http://localhost:3000";

export const postUrlSoportPagoAction = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: POST_URL_SOPORTEPAGO_REQUEST,
    });

    const token = localStorage.getItem("tokenClient"); // Obtiene el token del usuario
    // console.log(token)
    try {
      const headers = {
        authorization: `Bearer ${token}`, // Agrega el token al header
        "Content-Type": "application/json",
      };

      const response = await axios.post(`${URL}/client/paySuport`, payload, { headers });
      console.log(response)

      dispatch({
        type: POST_URL_SOPORTEPAGO_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: POST_URL_SOPORTEPAGO_FAILURE, // Corregí la acción de error
        error: error.message || "Error al enviar la URL de cloudinary",
      });
    }
  };
};