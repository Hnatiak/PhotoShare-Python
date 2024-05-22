import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { store } from '../../redux/store';

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

// export const updateUser = createAsyncThunk(
//   'user/updateUser',
//   async (userId, userData, { rejectWithValue }) => {
//     try {
//       const response = await axios.put(`/api/users`, userData);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );





// export const updateUser = createAsyncThunk(
//   'user/updateUser',
//   async ({ userId, userData }, { rejectWithValue }) => {
//     try {
//       const response = await axios.put(`/api/users`, userData); // ID користувача не треба додавати в URL
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );





export const updateUser = createAsyncThunk(
  'user/updateUser',
  async ({ userId, userData }, { rejectWithValue }) => {
    try {      
      const state = store.getState();
      const token = state.auth.access_token;
      const response = await axios.put(`/api/users/`, userData, {
        headers: {
          'Authorization': `Bearer ${token}`, // Передача токена в заголовках
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);


// export const updateUser = createAsyncThunk(
//   'user/updateUser',
//   async ({ userId, userData }, { rejectWithValue }) => {
//     try {
//       const response = await axios.put(`/api/users`, userData, {
//         headers: {
//           'Authorization': `Bearer ${localStorage.getItem('token')}`
//         }
//       });
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );