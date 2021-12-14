import { GET_PRODUCT_DETAILS, ERROR_IN_PRODUCT_DETAILS, CLEAR_PRODUCT_DETAILS } from '../actions/constant';

const initialState = {
    details: [],
    loading: true,
    message: ''
}

export default function productDetailsReducer(state = initialState, action) {
    console.log('action p details: ', action);

    switch(action.type){
        case GET_PRODUCT_DETAILS: return {
            details: action.payload,
            loading: false,
            message: 'SUCCESS'
        }
        case ERROR_IN_PRODUCT_DETAILS: return {
            details: action.payload,
            loading: false,
            message: 'FAILURE'
        }
        case CLEAR_PRODUCT_DETAILS: return {
            details: [],
            loading: false,
            message: 'DATA CLEAR'
        }
        default: return state
    }
}