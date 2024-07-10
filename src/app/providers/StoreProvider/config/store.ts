import { configureStore } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { rootReducer } from './rootReducers';
import { axiosProject } from '@/shared/api/api';

const extraArgument = axiosProject;

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
            extraArgument,
        },
        serializableCheck: false,
    }),
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

interface IStore<T> {
    dispatch: AppDispatch;
    state: RootState;
    extra: typeof extraArgument;
    rejectValue: T;
}

export { store };
export type { RootState, AppDispatch, IStore };
