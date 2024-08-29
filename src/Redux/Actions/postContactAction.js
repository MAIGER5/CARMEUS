import axios from 'axios'

const URL = 'http://localhost:3000/contact'

export const postContactAction = (payload) => {
  return async () =>{
    const response = await axios.post(`${URL}/`,payload)
    return response.data
  }
}
