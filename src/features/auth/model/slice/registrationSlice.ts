import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RegistrationSchema, ValidateDataRegistration } from '../types/registrationSchema';
import { fetchUserRegistration } from '../services/fetchUserRegistration';
import { fetchRegistrationCallPhone } from '../services/fetchCallPhone/fetchRegistrationCallPhone';
import { fetchCheckRegistrationCode } from '../services/fetchCheckCode/fetchCheckRegistrationCode';

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
            .addCase(fetchRegistrationCallPhone.pending, (state) => {
                state.error = '';
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(fetchRegistrationCallPhone.fulfilled, (state) => {
                state.isLoading = false;
                state.hasError = false;
                state.error = '';
                state.currentStep = 1;
            })
            .addCase(fetchRegistrationCallPhone.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                state.hasError = true;
            })
            .addCase(fetchCheckRegistrationCode.pending, (state) => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(fetchCheckRegistrationCode.fulfilled, (state, action) => {
                state.isLoading = false;
                state.phone_token = action.payload;
                state.currentStep = 2;
            })
            .addCase(fetchCheckRegistrationCode.rejected, (state, action) => {
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
