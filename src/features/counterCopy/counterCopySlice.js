import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchCountCopy } from "../counterCopy/counterCopyApi";

const initialState = {
  value: 0,
  status: "idle",
};

export const incrementAsync = createAsyncThunk(
  "counterCopy/fetchCount",
  async (amount) => {
    const response = await fetchCountCopy(amount);
    return response.data;
  }
);

export const counterCopySlice = createSlice({
  name: "counterCopy",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value += action.payload;
      });
  },
});

export const { increment, decrement, incrementByAmount } =
  counterCopySlice.actions;

export const selectCount = (state) => state.counterCopy.value;

export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};

export default counterCopySlice.reducer;
