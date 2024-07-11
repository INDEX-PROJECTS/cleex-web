import Cookies from 'js-cookie';
import { IAuthTokens } from '../types/loginSchema';

export const saveTokensStorage = (data: IAuthTokens) => {
    Cookies.set('access_token', data.access_token);
    Cookies.set('refresh_token', data.refresh_token);
};

export const removeTokensStorage = () => {
    Cookies.remove('access_token');
    Cookies.remove('refresh_token');
};

export const setHeaderAuthorization = (token = '') => ({
    Authorization: `Bearer ${token}`,
});
