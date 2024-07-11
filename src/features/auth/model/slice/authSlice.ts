import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthSchema, AuthSteps } from '../types/authSchema';

const initialState: AuthSchema = {
    modal: false,
    currentStep: AuthSteps.START,
    notificationModal: false,
    notificationText: '',
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setModal: (state, action: PayloadAction<boolean>) => {
            state.modal = action.payload;
        },
        setCurrentStep: (state, action: PayloadAction<AuthSteps>) => {
            state.currentStep = action.payload;
        },
        setNotificationText: (state, action: PayloadAction<string>) => {
            state.notificationText = action.payload;
        },
        setNotificationModal: (state, action: PayloadAction<boolean>) => {
            state.notificationModal = action.payload;
        },
    },
});

export const { actions: authActions } = authSlice;
export const { reducer: authReducer } = authSlice;
