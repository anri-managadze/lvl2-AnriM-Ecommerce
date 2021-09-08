import user from './user/userReducer'
import products from './products/productsReducer';
import cart from './cart/cartReducer';
import counter from './cart/cartReducer'
import {combineReducers} from 'redux';


const rootReducer= combineReducers({
        user,
        products,
        cart,
        counter
})

export default rootReducer;