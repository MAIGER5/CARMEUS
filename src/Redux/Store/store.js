import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "../Reducer/RootReducer";

const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;