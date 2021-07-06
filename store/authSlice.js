import { createSlice } from '@reduxjs/toolkit'
import { apiCallBegan } from './api'
import { setToken } from './middleware/api';

const tokenKey = "token";
const userKey = "user";
const slice = createSlice({
    name: 'auth',
    initialState: {
        token: "",
        error: "",
        user: {},
        loading: false
    },
    reducers: {
        loggedIn: (auth, action) => {
            auth.loading = false;
            auth.error = action.payload.error;
            auth.token = action.payload.data.token;
            auth.user = { ...action.payload.data.user }
            setToken(auth.token);
            localStorage.setItem(tokenKey, auth.token);
            localStorage.setItem(userKey, JSON.stringify(auth.user));
        },
        userRegister: (auth, action) => {
            auth.loading = false;
        },
        loggedOut: (auth, action) => {
            auth.token = "";
            auth.error = "";
            auth.user = {};
            setToken("");
            localStorage.removeItem(tokenKey);
            localStorage.removeItem(userKey);
        },
        apiRequested: (auth, action) => {
            auth.loading = true;
        },
        apiRequestFailed: (auth, action) => {
            auth.loading = false;
            auth.error = action.payload.message;
        },
    }
})

export const { loggedIn, userRegister, loggedOut, apiRequested, apiRequestFailed } = slice.actions;

//Action creators
const loginUrl = "/login/student";
const regUrl = "/register/student";

export const login = (credential) => apiCallBegan({
    url: loginUrl,
    method: 'post',
    data: credential,
    onStart: apiRequested.type,
    onSuccess: loggedIn.type,
    onError: apiRequestFailed.type
})

export const register = (data) => apiCallBegan({
    url: regUrl,
    method: 'post',
    data,
    onStart: apiRequested.type,
    onSuccess: userRegister.type,
    onError: apiRequestFailed.type
})

export const getToken = (dispatch) => {
    const token = localStorage.getItem(tokenKey);
    if (token) {
        dispatch({ type: loggedIn.type, payload: { data: { token: token } } })
    }
    return token;
};

export const isAuth = (dispatch, state) => {
    const token = localStorage.getItem(tokenKey);
    if (token && !state.auth.token) {
        dispatch({ type: loggedIn.type, payload: { token: token } })
    }
    return !!token;
}

export const getErrorMessage = (state) => {
    return state.auth.error
}


export default slice.reducer;