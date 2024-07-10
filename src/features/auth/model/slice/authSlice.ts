import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthSchema, AuthSteps } from '../types/authSchema';

const initialState: AuthSchema = {
    modal: false,
    currentStep: AuthSteps.START,
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
    },
});

export const { actions: authActions } = authSlice;
export const { reducer: authReducer } = authSlice;
