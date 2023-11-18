import {LOGIN_FAILURE, 
        LOGIN_SUCCESS, 
        LOGOUT , 
        REGISTER_FAILURE, 
        REGISTER_SUCCESS} from '../actionsTypes'


const initialState = {
    isLogged : false,
    token: null,
    role:'',
    error:''
}



const authReducer = (state=initialState, action)=>{
    switch(action.type){
        case REGISTER_SUCCESS:
            return {...state , isLogged: true, token : action.payload, error:null, role : action.payload.role}
        case LOGIN_SUCCESS:
            return {...state, isLogged:true, token: action.payload, role : action.role};
        case REGISTER_FAILURE:
            return {...state , isLogged: false, token : null, error:action.payload}
        case LOGIN_FAILURE:
            return {...state, isLogged: false, token :null, error: action.payload}
        case LOGOUT : 
            return initialState;
        default : 
            return state;        
    }
};

export default authReducer;