import {ADD_TO_CART , CLEAR_CART, GET_CART_ITEMS, GET_CART_ITEMS_SUCCESS, SET_CURRENT_PAGE} from '../actionsTypes'


const initialState = {
    bill : 0,
    items: [],
    loading: false,
    error: null,
    currentPage: 1,
    itemPerPage: 3,
    totalItems: 0,
  };


  const cartReducer= (state = initialState, action) =>{
    switch (action.type){
        case ADD_TO_CART:
            return {...initialState, items:[...action.payload], loading : false, error:null};     
        case GET_CART_ITEMS:
                return {...state, loading : true, error:null};
        case GET_CART_ITEMS_SUCCESS:
            return {...state, bill:action.payload.bill, items:action.payload.items, totalItems: action.payload.totalItems, loading:false, error: null};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload};  
        case CLEAR_CART : {
            return {initialState}
        }     
        default : return state
    }

}


export default cartReducer