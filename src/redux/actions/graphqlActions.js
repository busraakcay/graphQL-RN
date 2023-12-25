import { createAsyncThunk } from '@reduxjs/toolkit';
import { executeQuery } from '../../clients/graphqlClient';

export const sendQueryAsync = createAsyncThunk(
  'graphql',
  async (queryObject, { rejectWithValue }) => {
    try {
      const result = await executeQuery(queryObject);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
