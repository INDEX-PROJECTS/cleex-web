/* eslint-disable camelcase */
import axios, { InternalAxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';
import { __API__, __TIMEOUT__, __X_API_KEY__ } from '../const/constants';

const customHeaders: any = {
    'x-api-key': __X_API_KEY__,
};
const createAxiosInstance = () => {
    const config = axios.create({
        baseURL: __API__,
        timeout: +__TIMEOUT__,
    });

    config.interceptors.request.use(async (request) => {
        const access_token = Cookies.get('access_token');

        const requestConfig: InternalAxiosRequestConfig = {
            ...request,
            headers: {
                Authorization: `Bearer ${access_token}`,
                ...customHeaders,
                ...request.headers,
            },
        };

        return requestConfig;
    });

    return config;
};

export const axiosProject = createAxiosInstance();
