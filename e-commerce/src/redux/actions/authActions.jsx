import axios from "axios";
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from "../actionsTypes";

export const registerSuccess = (token) => ({
  type: REGISTER_SUCCESS,
  payload: token,
});

export const registerFailure = (error) => ({
  type: REGISTER_FAILURE,
  payload: error,
});

export const loginSuccess = (token, role) => ({
  type: LOGIN_SUCCESS,
  payload: token,
  role,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: LOGOUT,
});

export const register = (userData) => async (dispatch) => {
  try {
    const body = userData;
    const response = await axios.post(
      "http://localhost:4000/api/user/signUp",
      body
    );
    const token = response.data;
    const role = response.data.role;
    console.log(response.data);
    localStorage.setItem("token", token);
    dispatch(registerSuccess(token, role), signIn(body.email, body.password));
  } catch (error) {
    console.log(error, "register failed");
    dispatch(registerFailure(error));
  }
};

// export const client = axios.create({
//   baseURL:"http://localhost:4000"
// })

export const signIn = (identifiers) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/api/user/signIn",
      identifiers
    );
    const { token, role } = response.data;
    localStorage.setItem("token", token);
    localStorage.setItem("userRole", role);
    dispatch(loginSuccess(token, role));
  } catch (error) {
    console.log("login failed", error);
    dispatch(loginFailure(error.response.data));
  }
};

export const checkAuthentication = () => (dispatch) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("userRole");
  if (token) {
    dispatch(loginSuccess(token, role));
  } else {
    dispatch(loginFailure("session expired"));
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch(logout());
};
