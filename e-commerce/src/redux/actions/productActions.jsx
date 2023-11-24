import axios from "axios";
import {
  GET_PRODUCT,
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATED_PRODUCT,
} from "../actionsTypes";
import { setError } from "./errorActions";

export const getProducts = () => ({
  type: GET_PRODUCTS,
});

export const getProduct = (product) => ({
  type: GET_PRODUCT,
  payload: product,
});

export const getProductsSuccess = (products) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: products,
});

export const addProduct = (products) => ({
  type: ADD_PRODUCT,
  payload: products,
});

export const deleteProduct = (products) => ({
  type: DELETE_PRODUCT,
  payload: products,
});

export const updatedProduct = (products) => ({
  type: UPDATED_PRODUCT,
  payload: products,
});

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(getProducts());

    try {
      const response = await axios.get("http://localhost:4000/api/product/");
      dispatch(getProductsSuccess(response.data));
    } catch (error) {
      dispatch(setError(error.response.data, error.response.status));
    }
  };
};

export const fetchProduct = (id) => {
  return async (dispatch) => {
    dispatch(getProducts(id));
    try {
      const response = await axios.get(
        `http://localhost:4000/api/product/getProduct/${id}`
      );
      console.log("getProduct:", response.data);
      dispatch(getProductsSuccess(response.data));
    } catch (error) {
      dispatch(setError(error.response.data, error.response.status));
    }
  };
};

export const newProduct = (product) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.post(
        "http://localhost:4000/api/product/newProduct",
        product,
        config
      );
      dispatch(addProduct(response.data));
    } catch (error) {
      console.log("error adding product", error);
    }
  };
};

export const removeProduct = (productId) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    await axios.delete(
      `http://localhost:4000/api/product/${productId}`,
      config
    );
    await dispatch(fetchProducts());
  } catch (error) {
    console.log("can't delete product", error);
  }
};

export const productUpdate = (productId, product) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    await axios.put(
      `http://localhost:4000/api/product/${productId}`,
      product,
      config
    );

    dispatch(fetchProducts());
  } catch (error) {
    console.log("cannot Update", error);
  }
};
