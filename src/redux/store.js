import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/api";
import cartReucer from "./cart/cartSlice";

export default configureStore({
  reducer: {
    cart: cartReucer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
