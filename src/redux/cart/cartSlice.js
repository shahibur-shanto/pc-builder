import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartCPUItems: [],
  cartMonitorItems: [],
  cartMotherboardItems: [],
  cartRAMItems: [],
  cartPowerSupplyItems: [],
  cartStorageItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCPUCart(state, action) {
      const itemIndex = state.cartCPUItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex) {
        state.cartCPUItems.pop();
        state.cartCPUItems.push(action.payload);
      } else {
        state.cartCPUItems.push(action.payload);
      }
    },
    addToMonitorCart(state, action) {
      const itemIndex = state.cartMonitorItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
      } else {
        state.cartMonitorItems.push(action.payload);
      }
    },
    addToMotherboardCart(state, action) {
      const itemIndex = state.cartMotherboardItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
      } else {
        state.cartMotherboardItems.push(action.payload);
      }
    },
    addToRAMCart(state, action) {
      const itemIndex = state.cartRAMItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
      } else {
        state.cartRAMItems.push(action.payload);
      }
    },
    addToPowerSupplyCart(state, action) {
      const itemIndex = state.cartPowerSupplyItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartPowerSupplyItems.pop();
        state.cartPowerSupplyItems.push(action.payload);
      } else {
        state.cartPowerSupplyItems.push(action.payload);
      }
    },
    addToStorageCart(state, action) {
      const itemIndex = state.cartStorageItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
      } else {
        state.cartStorageItems.push(action.payload);
      }
    },
  },
});

export const {
  addToCPUCart,
  addToMonitorCart,
  addToMotherboardCart,
  addToRAMCart,
  addToPowerSupplyCart,
  addToStorageCart,
} = cartSlice.actions;

export default cartSlice.reducer;
