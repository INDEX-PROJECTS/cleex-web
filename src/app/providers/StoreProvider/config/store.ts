/* eslint-disable @typescript-eslint/ban-ts-comment */
import { configureStore } from "@reduxjs/toolkit";
import { rtkApi } from "@/shared/api/rtkApi";
import { $api } from "@/shared/api/api";
import { __IS_DEV__ } from "@/shared/const/constants";
import { createReducerManager } from "./reducerManager";
import type {
  Reducer,
  ReducersMapObject,
  StateFromReducersMapObject,
} from "@reduxjs/toolkit";
import type { StateSchema, ThunkExtraArg } from "./StateSchema";

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    [rtkApi.reducerPath]: rtkApi.reducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const extraArg: ThunkExtraArg = {
    api: $api,
  };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<
      StateFromReducersMapObject<StateSchema>
    >,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }).concat(rtkApi.middleware);
    },
  });
  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
