import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    products: (state, actions) => {
      state.value.push(actions.payload)
    },
    removeProducts: (state, actions) => {
      const index = state.value.indexOf(actions.payload); // Find index of product to remove
      if (index !== -1) {
        state.value = [...state.value.slice(0, index), ...state.value.slice(index + 1)]; // Create new array without removed product    
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { products, removeProducts } = cartSlice.actions

export default cartSlice.reducer