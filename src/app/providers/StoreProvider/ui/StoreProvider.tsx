import { memo } from "react";
import { Provider } from "react-redux";
import type { ReactNode } from "react";

interface StoreProviderProps {
  children: ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider = memo((props: StoreProviderProps) => {
  const { children, initialState, asyncReducers } = props;

  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>,
  );

  return <Provider store={store}>{children}</Provider>;
});
