import axios from 'axios';

export const GET_VIDEOS = 'GET_VIDEOS'



export const getVideosAction = () => {
  return async (dispatch) =>{
    const response = await axios.get('http://localhost:3000/video/')
    dispatch({ type: GET_VIDEOS, payload: response.data });
  }
}
