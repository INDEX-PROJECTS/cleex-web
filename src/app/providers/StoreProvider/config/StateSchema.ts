import type { AxiosInstance } from "axios";
import type { rtkApi } from "@/shared/api/rtkApi";
import type {
  ReducersMapObject,
  StateFromReducersMapObject,
  EnhancedStore,
  Reducer,
  Action,
} from "@reduxjs/toolkit";

export interface StateSchema {
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

  // Async reducers
}

export type StateSchemaKey = keyof StateSchema;
export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (
    state: StateFromReducersMapObject<StateSchema>,
    action: Action,
  ) => StateFromReducersMapObject<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
