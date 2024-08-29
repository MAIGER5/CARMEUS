import axios from "axios";

const URL = 'http://localhost:3000/login';

export const loginUserAction = (payload)=>{
  return async ()=>{
    const response = await axios.post(`${URL}/`,payload)
  };
};