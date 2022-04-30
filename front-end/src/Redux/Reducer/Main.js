import { combineReducers } from 'redux';
import { productPageReducer } from './reducer';
import cartPageReducer from './cartPageReducer';

const rootReducer = combineReducers({
    productPageReducer, cartPageReducer,
});

export default rootReducer;
