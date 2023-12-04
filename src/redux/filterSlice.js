const { createSlice } = require('@reduxjs/toolkit');

const initialStated = '';
const filterSlice = createSlice({
  name: 'filter',
  initialState: initialStated,
  reducers: {
    fillFilter(state, action) {
      return (state = action.payload);
    },
  },
});
export const filterReducer = filterSlice.reducer;
export const { fillFilter } = filterSlice.actions;
