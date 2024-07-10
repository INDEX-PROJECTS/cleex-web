import { loginSlice, registrationSlice, authSlice } from '@/features/auth';

export const rootReducer = {
    login: loginSlice.reducer,
    registration: registrationSlice.reducer,
    auth: authSlice.reducer,
};
