import { jwtDecode } from 'jwt-decode';

export const decodeJWT = (token) => {
  if (typeof token !== 'string' || !token.trim()) {
    console.error('El token debe ser una cadena no vacía.');
    return {}; // Retorna un objeto vacío si el token no es válido
  }

  try {
    const decoded = jwtDecode(token);
    return decoded;
  } catch (error) {
    // Loguea el error y continúa sin interrumpir el flujo
    console.error('Error al decodificar el token:', error.message);
    return {}; // Retorna un valor por defecto
  }
};