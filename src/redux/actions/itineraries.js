import { LOGIN_START, REGISTRY_START, CATEGORIES_START } from '../../consts/actionTypes';

export const postRegistry = payload => ({
    type: REGISTRY_START,
    payload
}); 

export const postLogin = payload => ({
    type: LOGIN_START,
    payload
}); 

export const getCategories = payload => ({
    type: CATEGORIES_START,
    payload
}); 