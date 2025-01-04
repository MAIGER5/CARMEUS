import { jwtDecode } from 'jwt-decode';

export const decodeJWT = (token)=>{
  try {
    const decode = jwtDecode(token);
    return decode
  } catch (error) {
    console.error('Error al decodificar el troken', error.message)
  }
}