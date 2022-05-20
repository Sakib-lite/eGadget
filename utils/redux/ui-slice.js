import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading(state) {
      state.loading = true;
    },
    unsetLoading(state) {
      state.loading = false;
    },
  },
});

export const {setLoading, unsetLoading} = uiSlice.actions;
export default uiSlice.reducer;
