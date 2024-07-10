import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { LoginSchema, ValidateDataLogin } from '../types/loginSchema';
import { loginByPhoneNumber } from '../services/loginByPhoneNumber';

const initialState: LoginSchema = {
    isLoading: false,
    phone: '',
    password: '',
    resetPassword: '',
    repeatResetPassword: '',
    validateData: {
        phone: [],
        password: [],
    },
    error: '',
    hasError: false,
    resetPhone: '',
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setPhone: (state, action: PayloadAction<string>) => {
            state.phone = action.payload;
        },
        setResetPhone: (state, action: PayloadAction<string>) => {
            state.resetPhone = action.payload;
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
        setLoginValidateDataError: (state, action: PayloadAction<ValidateDataLogin>) => {
            state.validateData = action.payload;
        },
        setHasError: (state, action: PayloadAction<boolean>) => {
            state.hasError = action.payload;
        },
        setError: (state, action: PayloadAction<string | undefined>) => {
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByPhoneNumber.pending, (state) => {
                state.error = '';
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(loginByPhoneNumber.fulfilled, (state) => {
                state.isLoading = false;
                state.hasError = false;
                state.error = '';
            })
            .addCase(loginByPhoneNumber.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                state.hasError = true;
            });
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
