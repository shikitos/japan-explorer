import _axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import { redirect } from "react-router-dom";
import { refresh } from "services/auth";

export const axios = _axios.create({ baseURL: import.meta.env.BASE_URL, withCredentials: true });

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Handle expired access token
const handleAuthError = async () => {
    try {
        await refresh(axios);

        return await Promise.resolve();
    } catch (error) {
        return Promise.reject(error);
    }
};

// Handle expired refresh token
const handleRefreshError = async () => {
    try {
        redirect("/auth/login");

        return await Promise.resolve();
    } catch (error) {
        return Promise.reject(error);
    }
};

// Check for 401 and 403 errors, refresh token and retry the request
createAuthRefreshInterceptor(axios, handleAuthError, { statusCodes: [401, 403] });
createAuthRefreshInterceptor(axios, handleRefreshError);
