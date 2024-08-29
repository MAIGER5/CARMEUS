import axios from 'axios'

const URL = 'http://localhost:3000/video'

export const postVideoAction = (payload) => {
  return async () =>{
    const response = await axios.post(`${URL}/`,payload)
    return response.data
  }
}
