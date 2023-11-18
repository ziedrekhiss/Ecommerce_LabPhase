import {ADD_TO_CART } from '../actionsTypes'


const initialState = {
    items: [],
    loading: false,
    error: null,
  };


  const cartReducer= (state = initialState, action) =>{
    switch (action.type){
        case ADD_TO_CART:
            return {...state, items:[...state.items, action.payload], loading : false, error:null};     
        default : return state
    }

}


export default cartReducer