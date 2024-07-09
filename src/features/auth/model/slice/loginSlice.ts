import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { LoginSchema, ValidateLoginDataError } from '../types/loginSchema';

const initialState: LoginSchema = {
    isLoading: false,
    phone: '',
    password: '',
    resetPassword: '',
    repeatResetPassword: '',
    validateData: [],
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setPhone: (state, action: PayloadAction<string>) => {
            state.phone = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        setResetPassword: (state, action: PayloadAction<string>) => {
            state.resetPassword = action.payload;
        },
        setRepeatResetPassword: (state, action: PayloadAction<string>) => {
            state.repeatResetPassword = action.payload;
        },
        setLoginValidateDataError: (state, action: PayloadAction<ValidateLoginDataError[]>) => {
            state.validateData = action.payload;
        },
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
