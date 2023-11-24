import axios from "axios";
import {
  GET_CART_ITEMS,
  GET_CART_ITEMS_SUCCESS,
  ADD_TO_CART,
  CLEAR_CART,
  SET_CURRENT_PAGE,
} from "../actionsTypes";
import { setError } from "./errorActions";

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const getCart = () => ({
  type: GET_CART_ITEMS,
});

export const getCartItemsSuccess = (items, totalItems, bill) => ({
  type: GET_CART_ITEMS_SUCCESS,
  payload: { items, totalItems, bill },
});

export const setPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});

export const deleteAll = () => ({
  type: CLEAR_CART,
});

export const addItemToCart = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(
      `http://localhost:4000/api/cart/addItem/${id}`,
      {},
      config
    );
    dispatch(addToCart(response.data.items));
  } catch (error) {
    console.log(error);
  }
};

export const fetchItems = (page, itemPerPage) => async (dispatch) => {
  try {
    dispatch(getCart());
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(
      `http://localhost:4000/api/cart/getItem?page=${page}&itemPerPage=${itemPerPage}`,
      config
    );
    const items =
      response.data && Array.isArray(response.data.items)
        ? response.data.items
        : [];
    if (items.length > 0) {
      dispatch(getCartItemsSuccess(items, items.length, response.data.bill));

      if (items.length >= 1) {
        dispatch(setPage(page));
      } else {
        dispatch(setPage(1));
      }
    } else {
      dispatch(deleteAll());
    }
  } catch (error) {
    // dispatch(setError(error.response.data, error.response.status));
    console.log(error);
  }
};

export const deleteItem =
  (productId, page, itemPerPage) => async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.delete(`http://localhost:4000/api/cart/${productId}`, config);
      await dispatch(fetchItems(page, itemPerPage));
    } catch (error) {
      console.log(error);
      dispatch(setError(error.response.data, error.response.status));
    }
  };

export const clearCart = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    await axios.delete("http://localhost:4000/api/cart/delcart/delAll", config);

    dispatch(deleteAll());
  } catch (error) {
    console.log(error);
    dispatch(setError(error.response.data, error.response.status));
  }
};

export const incQty = (productId) => async () => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    await axios.put(
      `http://localhost:4000/api/cart/incQty/${productId}`,
      {},
      config
    );
  } catch (error) {
    console.log(error);
  }
};

export const decQty = (productId) => async () => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    console.log(token);
    const response = await axios.put(
      `http://localhost:4000/api/cart/decQty/${productId}`,
      {},
      config
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
