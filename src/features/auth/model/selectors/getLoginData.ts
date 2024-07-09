import { RootState } from '@/app/providers/StoreProvider/config/store';

export const getLoginPhone = (state: RootState) => state.login.phone;

export const getLoginPassword = (state: RootState) => state.login.password;

export const getLoginResetPassword = (state: RootState) => state.login.resetPassword;

export const getLoginRepeatResetPassword = (state: RootState) => state.login.repeatResetPassword;

export const getLoginIsLoading = (state: RootState) => state.login.isLoading;

export const getLoginError = (state: RootState) => state.login.error;

export const getLoginValidateData = (state: RootState) => state.login.validateData;
