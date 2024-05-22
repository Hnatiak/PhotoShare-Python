import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// export const updateUser = createAsyncThunk(
//     'auth/updateUser',
//     async (userData, { rejectWithValue }) => {
//       try {
//         const response = await axios.put('/api/users', userData);
//         return response.data;
//       } catch (error) {
//         return rejectWithValue(error.response?.data || error.message);
//       }
//     }
//   );

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (userId, userData, { rejectWithValue }) => {
    try {
      const response = await axios.put(`/api/users/${userId}`, userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);