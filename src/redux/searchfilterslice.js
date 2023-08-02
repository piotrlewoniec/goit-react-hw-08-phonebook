import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: '' };

const searchFilterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setFilter } = searchFilterSlice.actions;
export default searchFilterSlice.reducer;
