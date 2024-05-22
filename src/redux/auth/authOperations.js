import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:8000/';

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
      const res = await axios.get('/api/auth/current');
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
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.put('/api/users', userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// export const refreshUser = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     if (!persistedToken) {
//       return thunkAPI.rejectWithValue('Unable to fetch user');
//     }

//     try {
//       setAuthHeader(persistedToken);
//       const res = await axios.get('/api/auth/current');
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );




// export const refreshUser = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkAPI) => {
//     // Reading the token from the state via getState()
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     if (persistedToken === null) {
//       // If there is no token, exit without performing any request
//       return thunkAPI.rejectWithValue('Unable to fetch user');
//     }

//     try {
//       // If there is a token, add it to the HTTP header and perform the request
//       setAuthHeader(persistedToken);
//       const res = await axios.get('/users/me');
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );


export const refreshUser = createAsyncThunk(
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
      thunkAPI.dispatch(setAuthHeader(res.data.access_token));
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);