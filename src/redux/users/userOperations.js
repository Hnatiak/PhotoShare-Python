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



export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async ({ skip = 0, limit = 10 }, thunkAPI) => {
    try {
      const response = await axios.get(`/api/users/all?skip=${skip}&limit=${limit}`);
      if (Array.isArray(response.data)) {
        return response.data; // Make sure this is the actual array of users
      } else {
        throw new Error('Expected an array of users');
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
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