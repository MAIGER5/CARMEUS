import { POST_CONTACT_REQUEST, POST_CONTACT_SUCCESS, POST_CONTACT_FAILURE } from "../Actions/postContactAction";
import { POST_CLIENT_REQUEST, POST_CLIENT_SUCCESS, POST_CLIENT_FAILURE, POST_CLIENT_CLEANE } from "../Actions/postClientAction";
import { GET_CLIENTS_FAILURE, GET_CLIENTS_REQUEST, GET_CLIENTS_SUCCESS } from "../Actions/getClientsAction";
import { GET_CONTACTS_FAILURE, GET_CONTACTS_REQUEST, GET_CONTACTS_SUCCESS } from "../Actions/getContactAction";

const initialState = {
    contact: {
        loading: false,
        success: '',
        responseContacts:[]
    },
    client: {
        loading: false,
        success: '',
        response:null,
        responseClients:[],
        error:null,
        ResponseError:[]
    }

};


const RootReducer = (state = initialState, action) => {

    switch (action.type) {

        // case contact
        case POST_CONTACT_REQUEST:
            return {
                ...state,
                contact: { 
                    ...state.contact, 
                    loading: true, 
                    error: null },
            };
        
        case POST_CONTACT_SUCCESS:
            return {
                ...state,
                contact: { 
                    ...state.contact, 
                    loading: false, 
                    success: {text1:'Mensaje enviado', text2:'Uno de nuestros asesores se contactará con usted en las proximas 24 horas'} },
            };
        case POST_CONTACT_FAILURE:
            return {
                ...state,
                contact: { 
                    ...state.contact, 
                    loading: false, 
                    error: action.error },
            };

        //case POST client
        case POST_CLIENT_REQUEST:
            return {
                ...state,
                client: { 
                    ...state.client, 
                    loading: true,
                     error: null },
            };
        
        case POST_CLIENT_SUCCESS:
            return {
                ...state,
                client: { 
                    ...state.client, 
                    loading: false, 
                    success: 'Sus datos han sido enviados', 
                    response: action.payload },
            };
        case POST_CLIENT_FAILURE:
            return {
                ...state,
                client: { 
                    ...state.client, 
                    loading: false, 
                    ResponseError: action.error },
            };

        //case GET client
        case POST_CLIENT_CLEANE:
            return {
                ...state,
                client: { 
                    ...state.client, 
                    loading: false, 
                    response:null,
                    ResponseError: [] 
                },
            };

        //case GET client
        case GET_CLIENTS_REQUEST:
            return {
                ...state,
                client: { 
                    ...state.client, 
                    loading: true, 
                    error: null },
            };
        
        case GET_CLIENTS_SUCCESS:
            return {
                ...state,
                client: { 
                    ...state.client, 
                    loading: false, 
                    success: 'Exitoso pedido', 
                    responseClients: action.payload },
            };
        case GET_CLIENTS_FAILURE:
            return {
                ...state,
                client: { 
                    ...state.client, 
                    loading: false, 
                    error: action.error },
            };
        
        //case GET contacts
        case GET_CONTACTS_REQUEST:
            return {
                ...state,
                client: { 
                    ...state.contact, 
                    loading: true, 
                    error: null },
            };
        
        case GET_CONTACTS_SUCCESS:
            return {
                ...state,
                contact: { 
                    ...state.contact, 
                    loading: false, 
                    success: 'Exitoso pedido', 
                    responseContacts: action.payload },
            };
        case GET_CONTACTS_FAILURE:
            return {
                ...state,
                client: { 
                    ...state.contact, 
                    loading: false, 
                    error: action.error },
            };
        
        default:
            return {...state}
    }
};

export default RootReducer
