import { createSlice } from '@reduxjs/toolkit';
import { sendQueryAsync } from '../actions/graphqlActions';

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const graphqlSlice = createSlice({
  name: 'graphql',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(sendQueryAsync.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendQueryAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(sendQueryAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default graphqlSlice.reducer;
