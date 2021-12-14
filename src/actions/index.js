
import {GET_PRODUCT_LIST, ERROR_IN_PRODUCT_LIST, GET_PRODUCT_DETAILS, ERROR_IN_PRODUCT_DETAILS } from './constant';
import axios from 'axios';

//Get product list
export const getProductList = (reqPayload = "") => async dispatch => {
    dispatch({type: 'Loading true' });
    if(reqPayload) {
        try {
            //const res = await axios.get(`https://development.coach.com/shop/new?srule=featured&page=4&start=0&fmt=headlessjson `);
            const res = await axios.get(`https://www.coach.com/shop/new/view-all?srule=featured&page=${reqPayload.pageNo}&start=${reqPayload.startFrom}&fmt=headlessjson`);
            dispatch({
                type: GET_PRODUCT_LIST,
                payload: res.data
            })
        }
        catch(err){
            dispatch({
                type: ERROR_IN_PRODUCT_LIST,
                payload: err
            })
        }
    }
}

//Get product details
export const getProductDetails_Request = (reqPayload = "") => async dispatch => {
    dispatch({type: 'Loading true' });

    if(reqPayload) {
        try {
            const res = await axios.get(`https://www.coach.com/api/get-product-data/${reqPayload.id}?__v__=xbEEtUE0Jm6CnEoWuWe8Y%27`);
            dispatch({
                type: GET_PRODUCT_DETAILS,
                payload: [res.data]
            });
        }
        catch(e){
            dispatch({
                type: ERROR_IN_PRODUCT_DETAILS,
                payload: e
            });
        }
    }
}