import { POST_CONTACT_REQUEST, POST_CONTACT_SUCCESS, POST_CONTACT_FAILURE } from "../Actions/postContactAction";
import { POST_CLIENT_REQUEST, POST_CLIENT_SUCCESS, POST_CLIENT_FAILURE, POST_CLIENT_CLEANE } from "../Actions/postClientAction";
import { GET_CLIENTS_FAILURE, GET_CLIENTS_REQUEST, GET_CLIENTS_SUCCESS } from "../Actions/getClientsAction";
import { GET_CONTACTS_FAILURE, GET_CONTACTS_REQUEST, GET_CONTACTS_SUCCESS } from "../Actions/getContactAction";
import { POST_EMPLOYEE_FAILURE, POST_EMPLOYEE_REQUEST, POST_EMPLOYEE_SUCCESS } from "../Actions/postEmployeeAction";
import { POST_LOGIN_CLIENT_FAILURE, POST_LOGIN_CLIENT_REQUEST, POST_LOGIN_CLIENT_SUCCESS } from "../Actions/postLoginClientrAction";
import { CLOSE_LOGIN_CLIENT_FAILURE, CLOSE_LOGIN_CLIENT_REQUEST, CLOSE_LOGIN_CLIENT_SUCCESS } from "../Actions/closeLoginClientAction";
import { CLEAN_LOGIN_RESPONSEERROR } from "../Actions/cleanLoginResponseErrorAction";
import { POST_LOGIN_EMPLOYEE_FAILURE, POST_LOGIN_EMPLOYEE_REQUEST, POST_LOGIN_EMPLOYEE_SUCCESS } from "../Actions/postLoginEmployeeAction";
import { name } from "@cloudinary/url-gen/actions/namedTransformation";
import { CLOSE_LOGIN_EMPLOYEE_FAILURE, CLOSE_LOGIN_EMPLOYEE_REQUEST, CLOSE_LOGIN_EMPLOYEE_SUCCESS } from "../Actions/closeLoginEmployeeAction";

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
        tokenClient: localStorage.getItem('tokenClient') || null,
        company:localStorage.getItem('company') || null,
        email:localStorage.getItem('emailClient') || null,
        ResponseError:null,
    },
    loginEmployee:{
        loading:false,
        success:'',
        tokenEmployee: localStorage.getItem('tokenEmployee') || null,
        name: localStorage.getItem('name') || null,
        email:localStorage.getItem('emailEmployee') || null,
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
                    tokenClient: action.payload,
                    company: action.company,
                    email: action.email,
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

        case CLOSE_LOGIN_CLIENT_REQUEST:
            return{
                ...state,
                login:{
                    ...state.login,
                    loading: true,
                    error: null
                }
            }
        case CLOSE_LOGIN_CLIENT_SUCCESS:
            return{
                ...state,
                login:{
                    ...state.login,
                    loading:false,
                    success:'Sesión cerrada',
                    tokenClient: null,
                    company: null,
                    email: null,
                }
            }

        case CLOSE_LOGIN_CLIENT_FAILURE:
            return{
                ...state,
                login:{
                    ...state.login,
                    loading:false,
                    ResponseError: action.error,
                }
            }

        case CLEAN_LOGIN_RESPONSEERROR:
            return{
                ...state,
                login:{
                    ...state.login,
                    loading:false,
                    ResponseError: null,
                },
                loginEmployee:{
                    ...state.loginEmployee,
                    loading:false,
                    ResponseError: null,
                }
            }


        //AQUI EMPIEZA EL LOGIN DEL EMPLEADO
        case POST_LOGIN_EMPLOYEE_REQUEST:
            return{
                ...state,
                loginEmployee:{
                    ...state.loginEmployee,
                    loading:true,
                    error:null,
                }
            }
        case POST_LOGIN_EMPLOYEE_SUCCESS:
            return{
                ...state,
                loginEmployee:{
                    ...state.loginEmployee,
                    loading:false,
                    success:'login correcto',
                    tokenEmployee: action.payload,
                    name: action.name,
                    email: action.email,
                }
            }
        case POST_LOGIN_EMPLOYEE_FAILURE:
            return{
                ...state,
                loginEmployee:{
                    ...state.loginEmployee,
                    loading:false,
                    ResponseError: action.error,
                }
            }
        

        // AQUI EMPLIEZA EL RESET DEL ESTADO GLOBAL DE EMPLOYEE CUANDO SE CIERRA LA SESION
        case CLOSE_LOGIN_EMPLOYEE_REQUEST:
            return{
                ...state,
                loginEmployee:{
                    ...state.loginEmployee,
                    loading: true,
                    error: null
                }
            }
        case CLOSE_LOGIN_EMPLOYEE_SUCCESS:
            return{
                ...state,
                loginEmployee:{
                    ...state.loginEmployee,
                    loading:false,
                    success:'Sesión cerrada',
                    tokenEmployee: null,
                    name: null,
                    email: null,
                }
            }

        case CLOSE_LOGIN_EMPLOYEE_FAILURE:
            return{
                ...state,
                loginEmployee:{
                    ...state.loginEmployee,
                    loading:false,
                    ResponseError: action.error,
                }
            }

            
        default:
            return {...state}
    }
};

export default RootReducer
