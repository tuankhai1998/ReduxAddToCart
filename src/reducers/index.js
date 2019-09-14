import { combineReducers } from 'redux';
import products from './product';
import cart from './cart';
import showcart from './showcart';


const appReducers = combineReducers({
    products,
    cart,
    showcart
});

export default appReducers;