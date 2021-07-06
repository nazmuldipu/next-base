import axios from 'axios';
import * as actions from '../api';

axios.defaults.baseURL = process.env.REACT_APP_API_URL || "https://backend.imentalhealth.net/api";

export const setToken = (token) => {
    axios.defaults.headers.common["x-auth-token"] = token;
}

const api = ({ dispatch }) => next => async action => {
    if (action.type !== actions.apiCallBegan.type)
        return next(action);

    const { url, method, data, onStart, onSuccess, onError } = action.payload;

    if (onStart)
        dispatch({ type: onStart });

    next(action);


    try {
        const response = await axios.request({
            url,
            method,
            data,
        });
        if (onSuccess)
            dispatch({ type: onSuccess, payload: response.data });
        //General 
        dispatch(actions.apiCallSuccess(response.data));
    } catch (error) {
        if (onError)
            dispatch({ type: onError, payload: error.response.data });

        dispatch(actions.apiCallFailed(error.message));
    }


}
export default api;