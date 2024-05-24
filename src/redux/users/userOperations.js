import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { store } from '../../redux/store';


export const updateUserAvatar = createAsyncThunk(
  'user/updateUserAvatar',
  async ({ userId, avatarFile }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.access_token; // Предполагаємо, що у вашому стейті є токен авторизації

      const formData = new FormData();
      formData.append('file', avatarFile);

      const response = await axios.put(`/api/users/avatar`, formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);




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


export const updateUserRole = createAsyncThunk(
  'user/updateUserRole',
  async ({ userId, newRole }, { rejectWithValue }) => {
    try {
      const state = store.getState();
      const token = state.auth.access_token;

      const response = await axios.put(
        `/api/users/role/${userId}`,
        { role: newRole },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error('Error response:', error.response);
      const errorMessage = error.response?.data?.detail
        ? error.response.data.detail.toString()
        : error.message;
      return rejectWithValue(errorMessage);
    }
  }
);