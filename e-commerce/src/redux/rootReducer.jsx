import {combineReducers} from 'redux'
import authReducer from './reducers/authReducers'
import errorReducer from './reducers/errorReducer'
import productReducer from './reducers/productReducer';
import cartReducer from './reducers/cartReducer';



const rootReducer = combineReducers({
    returnError:errorReducer,
    auth: authReducer,
    product : productReducer,
    cart : cartReducer
});


export default rootReducer