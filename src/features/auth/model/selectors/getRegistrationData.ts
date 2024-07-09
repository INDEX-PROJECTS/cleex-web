import { RootState } from '@/app/providers/StoreProvider/config/store';

export const getRegistrationPhone = (state: RootState) => state.registration.phone;

export const getRegistrationPassword = (state: RootState) => state.registration.password;

export const getRegistrationCode = (state: RootState) => state.registration.code;

export const getRegistrationUsername = (state: RootState) => state.registration.username;
