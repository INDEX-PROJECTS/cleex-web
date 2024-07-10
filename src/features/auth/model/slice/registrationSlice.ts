import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RegistrationSchema, ValidateDataRegistration } from '../types/registrationSchema';
import { fetchCallPhone } from '../services/fetchCallPhone';
import { fetchCheckCode } from '../services/fetchCheckCode';
import { fetchUserRegistration } from '../services/fetchUserRegistration';

const initialState: RegistrationSchema = {
    isLoading: false,
    phone: '',
    password: '',
    code: '',
    username: '',
    token: '',
    phone_token: '',
    currentStep: 0,
    validateData: {
        password: [],
        username: [],
    },
    hasError: false,
};

export const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        setPhone: (state, action: PayloadAction<string>) => {
            state.phone = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        setCode: (state, action: PayloadAction<string>) => {
            state.code = action.payload;
        },
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setToken: (state, action: PayloadAction<string | null>) => {
            state.token = action.payload;
        },
        setRegistrationValidateDataError: (state, action: PayloadAction<ValidateDataRegistration>) => {
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
            .addCase(fetchCallPhone.pending, (state) => {
                state.error = '';
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(fetchCallPhone.fulfilled, (state) => {
                state.isLoading = false;
                state.hasError = false;
                state.error = '';
                state.currentStep = 1;
            })
            .addCase(fetchCallPhone.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                state.hasError = true;
            })
            .addCase(fetchCheckCode.pending, (state) => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(fetchCheckCode.fulfilled, (state, action) => {
                state.isLoading = false;
                state.phone_token = action.payload;
                state.currentStep = 2;
            })
            .addCase(fetchCheckCode.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(fetchUserRegistration.pending, (state) => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(fetchUserRegistration.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(fetchUserRegistration.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: registrationActions } = registrationSlice;
export const { reducer: registrationReducer } = registrationSlice;
