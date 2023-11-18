import axios from 'axios'
import {GET_CART_ITEMS,  GET_CART_ITEMS_SUCCESS, ADD_TO_CART, DELETE_CART_ITEM, CLEAR_CART, CART_LOADING } from '../actionsTypes'
import {setError} from './errorActions'

export const addToCart =(product)=>({
    type: ADD_TO_CART,
    payload : product
})


export const addItemToCart = (id)=> async (dispatch)=>{
    try {
        console.log(id)
        // const response = await axios.post(`http://localhost:4000/api/cart/addItem/${id}`);
        const response = await axios.post(`http://localhost:4000/api/cart/addItem/${id}`);
        console.log(response)
        dispatch (addToCart(response.data))
    } catch (error) {
        console.log("error",error.response.data, error.response.status)
        dispatch(setError(error.response.data, error.response.status));
    }
}

