import { createSlice } from '@reduxjs/toolkit';

const initialStated = '';
const filterSlice = createSlice({
  name: 'filter',
  initialState: initialStated,
  reducers: {
    fillFilter(state, { payload }) {
      return (state = payload);
    },
  },
});
export const filterReducer = filterSlice.reducer;
export const { fillFilter } = filterSlice.actions;
