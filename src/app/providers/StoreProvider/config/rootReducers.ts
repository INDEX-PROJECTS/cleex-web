import { loginSlice, registrationSlice } from '@/features/auth';

export const rootReducer = {
    login: loginSlice.reducer,
    registration: registrationSlice.reducer,
};
