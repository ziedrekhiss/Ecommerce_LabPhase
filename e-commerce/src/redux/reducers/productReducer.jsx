import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  ADD_PRODUCT,
} from "../actionsTypes";

const initialState = {
  products: [],
  loading: false,
  error: null,
  currentPage: 1,
  itemPerPage: 3,
  totalItems: 0,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, loading: true, error: null };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: null,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
        error: null,
      };
    default:
      return state;
  }
};

export default productReducer;
