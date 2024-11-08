import { POST_CONTACT_REQUEST, POST_CONTACT_SUCCESS, POST_CONTACT_FAILURE } from "../Actions/postContactAction";
import { POST_CLIENT_REQUEST, POST_CLIENT_SUCCESS, POST_CLIENT_FAILURE } from "../Actions/postClientAction";

const initialState = {
    contact: {
        loading: false,
        success: '',
    },
    client: {
        loading: false,
        success: '',
        response:null,
    }

};


const RootReducer = (state = initialState, action) => {

    switch (action.type) {

        // case contact
        case POST_CONTACT_REQUEST:
            return {
                ...state,
                contact: { ...state.contact, loading: true, error: null },
            };
        
        case POST_CONTACT_SUCCESS:
            return {
                ...state,
                contact: { ...state.contact, loading: false, success: 'Contacto guardado' },
            };
        case POST_CONTACT_FAILURE:
            return {
                ...state,
                contact: { ...state.contact, loading: false, error: action.error },
            };

        //case client
        case POST_CLIENT_REQUEST:
            return {
                ...state,
                client: { ...state.client, loading: true, error: null },
            };
        
        case POST_CLIENT_SUCCESS:
            return {
                ...state,
                client: { ...state.client, loading: false, success: 'Sus datos han sido enviados', response: action.payload },
            };
        case POST_CLIENT_FAILURE:
            return {
                ...state,
                client: { ...state.client, loading: false, error: action.error },
            };
        
        default:
            return {...state}
    }
};

export default RootReducer
