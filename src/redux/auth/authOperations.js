import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:8000/';

// axios.defaults.baseURL = 'https://photoshare-python-back.onrender.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('api/auth/signup', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      if (error.response && error.response.status === 409) {
        return thunkAPI.rejectWithValue('Account already exists');
      }
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);


export const confirmedEmail = createAsyncThunk(
  'auth/confirmEmail',
  async (token, thunkAPI) => {
    try {
      const res = await axios.get(`/api/auth/confirmed_email/${token}`);
      thunkAPI.dispatch(getUserData()); // Оновити дані користувача та токен
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);



export const login = async (userData) => {
  try {
    const response = await axios.post('/api/auth/login', new URLSearchParams({
      username: userData.email,
      password: userData.password
    }));

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.detail || 'Login failed');
  }
};




export const getUserData = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.refresh_token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/api/auth/refresh_token');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const token = state.auth.access_token;
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    
    await axios.post('api/auth/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue({status: error.response.status, message: error.message});
  }
});


export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.access_token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/api/auth/refresh_token');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);