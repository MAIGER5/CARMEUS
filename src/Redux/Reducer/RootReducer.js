
import { GET_VIDEOS } from "../Actions/getVideosAction";


const initialState = {
    Contact : [],
    Videos : []
};


const RootReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_VIDEOS:
            return {
                ...state,
                Videos: action.payload
            };
        default:
            return {...state}
    }
};

export default RootReducer
