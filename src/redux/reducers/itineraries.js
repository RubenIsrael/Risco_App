import { 
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    REGISTRY_START, 
    REGISTRY_SUCCESS, 
    REGISTRY_ERROR,
    CATEGORIES_START,
    CATEGORIES_SUCCESS,
    CATEGORIES_ERROR
} from '../../consts/actionTypes';

export default function(state, action){
    switch (action.type) {
        case LOGIN_START:
            return {...state};
            break;
        case LOGIN_SUCCESS:
            console.log('action results LOGIN: ', action.results);
            return {...state, user_info: action.results};
            break;
        case LOGIN_ERROR:
            console.log('action error LOGIN: ', action.error.request);
            return {...state, error: action.error};
            break; 
        case REGISTRY_START:
            return {...state};
            break;
        case REGISTRY_SUCCESS:
            console.log('action results REGISTRO: ', action.results);
            return {...state, user_info: action.results};
            break;
        case REGISTRY_ERROR:
            console.log('action error REGISTRO: ', action.error.request);
            return {...state, error: action.error};
            break; 
        case CATEGORIES_START:
            return {...state};
            break;
        case CATEGORIES_SUCCESS:
            console.log('action results CATEGORIAS: ', action.results);
            return {...state, categories: action.results};
            break;
        case CATEGORIES_ERROR:
            console.log('action error CATEGORIAS: ', action.error.request);
            return {...state, error: action.error};
            break; 
        default:
            return {...state};
            break;
    }
} 