import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalItems: 0,
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    replaceCart(state, action) {
      const { cartItems, totalItems, totalPrice } = action.payload;
      state.cartItems = cartItems;
      state.totalItems = totalItems;
      state.totalPrice = totalPrice;
    },

    addItemToCart(state, action) {
      const newItem = action.payload;

      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalItems++; //increment of total items
      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          image: newItem.image,
          slug: newItem.slug,
          brand: newItem.brand,
          quantity: 1,
          existingItemTotalPrice: newItem.price,
          category: newItem.category,
        });
        state.totalPrice += newItem.price;
      } else {
        existingItem.quantity++;
        existingItem.existingItemTotalPrice += newItem.price;
        state.totalPrice += newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      state.totalItems--; //decrement of total items
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.cartItems = state.cartItems.filter((item) => item.id !== id);
          state.totalPrice -= existingItem.existingItemTotalPrice;
        } else {
          existingItem.quantity--;
          existingItem.totalPrice -= existingItem.price;
          state.totalPrice -= existingItem.price;
        }
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
