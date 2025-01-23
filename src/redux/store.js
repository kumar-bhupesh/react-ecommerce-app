import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/search/searchSlice";
import cartReducer from "../features/cart/cartSlice";
import filterReducer from "../features/filter/filterSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    cart: cartReducer,
    filter: filterReducer,
  },
});

export default store;
