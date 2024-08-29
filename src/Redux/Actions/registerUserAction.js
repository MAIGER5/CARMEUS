import axios from "axios";

const URL = 'http://localhost:3000/register';

export const registerUserAction = (payload)=>{
  return async ()=>{
    const response = await axios.post(`${URL}/`,payload)
    return response.data
  };
};