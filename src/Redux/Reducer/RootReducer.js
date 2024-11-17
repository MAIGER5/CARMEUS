import { POST_CONTACT_REQUEST, POST_CONTACT_SUCCESS, POST_CONTACT_FAILURE } from "../Actions/postContactAction";
import { POST_CLIENT_REQUEST, POST_CLIENT_SUCCESS, POST_CLIENT_FAILURE, POST_CLIENT_CLEANE } from "../Actions/postClientAction";
import { GET_CLIENTS_FAILURE, GET_CLIENTS_REQUEST, GET_CLIENTS_SUCCESS } from "../Actions/getClientsAction";
import { GET_CONTACTS_FAILURE, GET_CONTACTS_REQUEST, GET_CONTACTS_SUCCESS } from "../Actions/getContactAction";
import { POST_EMPLOYEE_FAILURE, POST_EMPLOYEE_REQUEST, POST_EMPLOYEE_SUCCESS } from "../Actions/postEmployeeAction";
import { POST_LOGIN_CLIENT_FAILURE, POST_LOGIN_CLIENT_REQUEST, POST_LOGIN_CLIENT_SUCCESS } from "../Actions/postLoginClientrAction";

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
    },
    employee: {
        loading: false,
        success: '',
        response:null,
        responseEmployees:[],
        error:null,
        ResponseError:[]
    },
    login:{
        loading:false,
        success:'',
        tokenClient:null,
        tokenEmployee:null,
        ResponseError:null,
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
                employee: { 
                    ...state.employee, 
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

        //case POST employee
        case POST_EMPLOYEE_REQUEST:
            return {
                ...state,
                employee: { 
                    ...state.employee, 
                    loading: true,
                     error: null },
            };
        
        case POST_EMPLOYEE_SUCCESS:
            console.log('estoy en el reducer')
            return {
                ...state,
                employee: { 
                    ...state.employee, 
                    loading: false, 
                    success: 'Sus datos han sido enviados', 
                    response: action.payload },
            };
        case POST_EMPLOYEE_FAILURE:
            return {
                ...state,
                employee: { 
                    ...state.employee, 
                    loading: false, 
                    ResponseError: action.error },
            };
        
        case POST_LOGIN_CLIENT_REQUEST:
            return{
                ...state,
                login:{
                    ...state.login,
                    loading:true,
                    error:null,
                }
            }
        case POST_LOGIN_CLIENT_SUCCESS:
            return{
                ...state,
                login:{
                    ...state.login,
                    loading:false,
                    success:'login correcto',
                    tokenClient:action.payload
                }
            }
        case POST_LOGIN_CLIENT_FAILURE:
            return{
                ...state,
                login:{
                    ...state.login,
                    loading:false,
                    ResponseError: action.error,
                }
            }
        default:
            return {...state}
    }
};

export default RootReducer
