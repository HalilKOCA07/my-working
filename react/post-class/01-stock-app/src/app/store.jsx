import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../feature/authSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const perisistConfig = {
  key: "root",
  storage,
};

const persistedAuthReducer = persistReducer(perisistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

export default store;
