import { createSlice } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = () => {
  try {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  } catch (error) {
    // console.error("Error loading cart from local storage:", error);
    return [];
  }
};

const saveCartToLocalStorage = (cartItems) => {
  try {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  } catch (error) {
    // console.error("Error saving cart to local storage:", error);
  }
};

const initialState = {
  cartItems: loadCartFromLocalStorage(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: action.payload.qty,
        });
      }

      saveCartToLocalStorage(state.cartItems);
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      saveCartToLocalStorage(state.cartItems);
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity = Math.max(1, existingItem.quantity + quantity);
      }
      saveCartToLocalStorage(state.cartItems);
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
