import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { register,
    login,
    logout,
    refreshUser, 
} from './authOperations';
import axios from 'axios';



// export const loginUser = createAsyncThunk('auth/login', async (userData) => {
//   const response = await login(userData);
//   console.log('Response from server:', response);
//   return response;
// });

export const loginUser = createAsyncThunk('auth/login', async (userData) => {
  const response = await login(userData);
  console.log('Response from server:', response);
  const userResponse = await axios.get('/api/users/me', {
    headers: {
      Authorization: `Bearer ${response.access_token}`
    }
  });
  console.log('User data:', userResponse.data);
  return {
    user: userResponse.data,
    access_token: response.access_token,
    refresh_token: response.refresh_token,
    token_type: response.token_type
  };
});

const initialState = {
  user: {
    username: null,
    email: null,
  },
  access_token: '',
  refresh_token: '',
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
  loading: 'idle',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.access_token = payload.access_token;
        state.refresh_token = payload.refresh_token;
        state.isLoggedIn = true;
        state.loading = 'idle';
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = 'idle';
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = { username: null, email: null };
        state.access_token = '';
        state.refresh_token = '';
        state.isLoggedIn = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.error = action.payload;
        if (action.payload.status === 401)
        {
          state.user = { username: null, email: null };
          state.access_token = '';
          state.refresh_token = '';
          state.isLoggedIn = false;
        }
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.access_token = payload.access_token;
        state.refresh_token = payload.refresh_token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, { payload }) => {
        state.error = payload;
        state.isRefreshing = false;
      })
});

export const authReducer = authSlice.reducer;