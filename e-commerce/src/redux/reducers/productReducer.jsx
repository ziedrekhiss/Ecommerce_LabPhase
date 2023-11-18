import {GET_PRODUCTS, GET_PRODUCTS_SUCCESS } from '../actionsTypes'

const initialState = {
    products: [],
    loading: false,
    error: null,
  };


const productReducer= (state = initialState, action) =>{
    switch (action.type){
        case GET_PRODUCTS:
            return {...state, loading : true, error:null};
        case GET_PRODUCTS_SUCCESS:
            return {...state, loading : false, products: action.payload, error:null }     
        default : return state
    }

}



export default productReducer
