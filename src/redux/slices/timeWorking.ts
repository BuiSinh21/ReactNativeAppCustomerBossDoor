import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, OrderComeState } from '../interface';
import { use } from 'react';

const initialState = {
  create_time: undefined,
  statusWorking: false,
  haveOrder: false,

} as OrderComeState;

const timeWorling = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCreateTime(state, action: PayloadAction<string | undefined>) {
      state.create_time = action.payload;
    },
    setStatusWorking(state, action: PayloadAction<boolean>) {
      state.statusWorking = action.payload;
    },
    setHaveOrder(state, action: PayloadAction<boolean>) {
      state.haveOrder = action.payload;
    },
    resetTimeWorking() {
      return initialState;
    },
  },
});

export const {
  setCreateTime,
  setStatusWorking,
  setHaveOrder,
  resetTimeWorking
} = timeWorling.actions;

export default timeWorling.reducer;
