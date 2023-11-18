import axios from 'axios'
import {GET_PRODUCT, GET_PRODUCTS, GET_PRODUCTS_SUCCESS, ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT, PRODUCT_LOADING } from '../actionsTypes'
import {setError} from './errorActions'

export const getProducts= ()=>({
    type: GET_PRODUCTS,
    })

export const getProduct=(product)=>({
  type : GET_PRODUCT,
  payload: product
})

export const getProductsSuccess= (products)=>({
    type: GET_PRODUCTS_SUCCESS,
    payload : products
    })

export const addProduct= (products)=>({
    type: ADD_PRODUCT,
    payload : products,
  })

export const deleteProduct =(products)=>({
    type: DELETE_PRODUCT,
    payload : products,
})

export const updateProduct =(products)=>({
    type: UPDATE_PRODUCT,
    payload : products,
})


export const productLoading = ()=>({
    type : PRODUCT_LOADING
})


export const fetchProducts = () => {
    return async (dispatch) => {
      dispatch(getProducts());
  
      try {
        const response = await axios.get('http://localhost:4000/api/product/');
        console.log('getAllproducts:',response.data)
        dispatch(getProductsSuccess(response.data));
      } catch (error) {
        dispatch(setError(error.response.data, error.response.status));
      }
    };
  };


export const fetchProduct = (id)=>{
  return async (dispatch) => {
    dispatch(getProducts(id));
    try {
      const response = await axios.get(`http://localhost:4000/api/product/${id}`);
      console.log('getProduct:',response.data)
      dispatch(getProductsSuccess(response.data));
    } catch (error) {
      dispatch(setError(error.response.data, error.response.status));
    }
  };
};