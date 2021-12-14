import { combineReducers } from 'redux';
import productListReducer from './productList';
import productDetailsReducer from './productDetails';


const rootReducer = combineReducers({
	productListReducer,
	productDetailsReducer
});

export default rootReducer;