import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { LoginSchema, ValidateDataLogin, ValidateResetPassword } from '../types/loginSchema';
import { loginByPhoneNumber } from '../services/loginByPhoneNumber';
import { fetchResetCallPhone } from '../services/fetchCallPhone/fetchResetCallPhone';
import { fetchCheckResetCode } from '../services/fetchCheckCode/fetchCheckResetCode';
import { fetchUserResetPassword } from '../services/fetchUserResetPassword';

const initialState: LoginSchema = {
    isLoading: false,
    phone: '',
    password: '',
    resetPassword: '',
    repeatResetPassword: '',
    validateLoginData: {
        phone: [],
        password: [],
    },
    error: '',
    hasError: false,
    resetPhone: '',
    code: '',
    phone_token: '',
    validateResetPasswordData: {
        resetPassword: [],
        repeatResetPassword: [],
    },
    token: '',
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
        setCode: (state, action: PayloadAction<string>) => {
            state.code = action.payload;
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
            state.validateLoginData = action.payload;
        },
        setToken: (state, action: PayloadAction<string | null>) => {
            state.token = action.payload;
        },
        setResetPasswordsError: (state, action: PayloadAction<ValidateResetPassword>) => {
            state.validateResetPasswordData = action.payload;
        },
        setHasError: (state, action: PayloadAction<boolean>) => {
            state.hasError = action.payload;
        },
        setError: (state, action: PayloadAction<string | undefined>) => {
            state.error = action.payload;
        },
        setPhoneToken: (state, action: PayloadAction<string>) => {
            state.phone_token = action.payload;
        },
        setClearStatus: (state) => {
            state.isLoading = false;
            state.error = '';
            state.hasError = false;
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
            })
            .addCase(fetchUserResetPassword.pending, (state) => {
                state.error = '';
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(fetchUserResetPassword.fulfilled, (state) => {
                state.isLoading = false;
                state.hasError = false;
                state.error = '';
            })
            .addCase(fetchUserResetPassword.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                state.hasError = true;
            })
            .addCase(fetchResetCallPhone.pending, (state) => {
                state.error = '';
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(fetchResetCallPhone.fulfilled, (state) => {
                state.isLoading = false;
                state.hasError = false;
                state.error = '';
            })
            .addCase(fetchResetCallPhone.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                state.hasError = true;
            })
            .addCase(fetchCheckResetCode.pending, (state) => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(fetchCheckResetCode.fulfilled, (state, action) => {
                state.isLoading = false;
                state.phone_token = action.payload;
            })
            .addCase(fetchCheckResetCode.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
