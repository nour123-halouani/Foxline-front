import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice"
import publicReducer from "./reducers/publicSlice"

export function makeStore() {
  return configureStore({
    reducer: {
      auth: authReducer,
      public: publicReducer
    },
  });
}

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;