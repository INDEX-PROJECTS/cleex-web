import { RootState } from '@/app/providers/StoreProvider/config/store';

export const getRegistrationPhone = (state: RootState) => state.registration.phone;

export const getRegistrationIsLoading = (state: RootState) => state.registration.isLoading;

export const getRegistrationError = (state: RootState) => state.registration.error;

export const getRegistrationPassword = (state: RootState) => state.registration.password;

export const getRegistrationCode = (state: RootState) => state.registration.code;

export const getRegistrationName = (state: RootState) => state.registration.name;

export const getRegistrationPhoneToken = (state: RootState) => state.registration.phone_token;

export const getRegistrationToken = (state: RootState) => state.registration.token;

export const getRegistrationValidateData = (state: RootState) => state.registration.validateData;

export const getRegistrationHasError = (state: RootState) => state.registration.hasError;
