import { configureStore } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { rootReducer } from './rootReducers';
import { $api } from '@/shared/api/api';

export interface ThunkExtraArg {
    api: AxiosInstance;
}

const extraArg: ThunkExtraArg = {
    api: $api,
};

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
            extraArgument: extraArg,
        },
        serializableCheck: false,
    }),
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

interface Store {
    dispatch: AppDispatch;
    state: RootState;
    extra: typeof extraArg;
}

export { store };
export type { RootState, AppDispatch, Store };
