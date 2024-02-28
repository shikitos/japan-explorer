import _axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import { redirect } from "react-router-dom";
import { refresh } from "services/auth";
import { transformDates } from "utils/transformDates";

export const axios = _axios.create({ baseURL: import.meta.env.BASE_URL, withCredentials: true });

axios.interceptors.response.use(
    (response) => {
        response.data = transformDates(response.data);
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const axiosForRefresh = _axios.create({ baseURL: "/api", withCredentials: true });

// Handle expired access token
const handleAuthError = async () => {
    try {
        await refresh(axiosForRefresh);

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
createAuthRefreshInterceptor(axiosForRefresh, handleRefreshError);
